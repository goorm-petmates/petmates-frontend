import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NoContents from "../../components/NoContents";
import "../../styles/StylePetInfo.css";
import PetCard from "../../components/PetCard";
import Footer from '../../components/Footer';
import MemberFormModal from '../../components/MemberFormModal';

function PetInfo() {
  const location = useLocation();

  const [petCards, setPetCards] = useState([]);
  const memberId = 1;

  const [modalMessage, setModalMessage] = useState("");

   useEffect(() => {
     fetch(`https://petmates.co.kr/api/kakao/login/status`,{
       credentials: 'include',
     })
       .then((res) => {
         if (!res.ok) {
           throw new Error('Network response was not ok');
         }
         return res.json();
       })
       .then((data) => {
         console.log(data);
         if (data.result === false) {
           navigate('/');
           openModal();
           setModalMessage("로그인 되어 있지 않아 메인 화면으로 이동합니다.");
         }else {
           // memberId를 사용하여 MSW 핸들러에서 반환된 응답을 사용
           fetch(`https://petmates.co.kr/api/petinfo/${memberId}`,{
             credentials: 'include',
           })
             .then((res) => res.json())
             .then((res) => {
               console.log(res.data);

               // API 응답 데이터를 petCards 형태로 가공
               const formattedData = res.data.map((pet) => ({
                 id: pet.id, // 반려동물의 고유 식별자
                 petImgSrc: pet.petImgSrc, // 반려동물 이미지 URL
                 petInfo: pet.name, // 반려동물 정보
                 startDate: pet.startDate,
                 endDate:pet.endDate,
                 price:pet.totalPrice,
               }));

               setPetCards(formattedData);
             })
             .catch((error) => {
               console.error(error);
             });
         }
       })
       .catch((error) => {
         console.error('Error:', error);
       });
   }, []);


  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleAddPetCard = () => {
    if (petCards.length >= 3) {
      openModal();
      setModalMessage("최대 3마리까지 등록할 수 있습니다.")
    } else {
      navigate('/petinfoadd');
    }
  }

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  return (
    <div>
      {/*<HeaderWithNav />*/}

      <div>
        <div className="mypage-bar" />
        <div className="mypage-bar-text">내정보</div>
      </div>

      <Link to='/myinfo'>
        <button className="petinfo-nav1">내정보</button>
      </Link>
      <Link to='/petInfo'>
        <button className="petinfo-nav2">반려동물 정보</button>
      </Link>
      <div className="mypage-navunderLine"></div>

      <div className="petinfo-container">
        <button className="mypage-petinfo-add" onClick={handleAddPetCard}>
          등록하기
        </button>
        <div className="petinfo-in">
          {showModal && (
            <MemberFormModal
              title="펫 정보 등록"
              text={modalMessage}
              onClose={closeModal}
            />
          )}
          <div className="pet-card-components">
            {petCards.length > 0 ? (
              petCards.map((petCard) => (
                <PetCard
                  key={petCard.id}
                  petImgSrc={petCard.petImgSrc}
                  petInfo={petCard.petInfo + " " + petCard.startDate + "~" + petCard.endDate + " " + petCard.price}
                  onEdit={() => handleEdit(petCard.id)}
                  onDelete={() => handleDelete(petCard.id)}
                />
              ))
            ) : (
              <NoContents text="반려동물 정보" />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetInfo;