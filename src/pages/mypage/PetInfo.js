import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import NoContents from "../../components/NoContents";
import "../../styles/StylePetInfo.css";
import PetCard from "../../components/PetCard";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { data1, data2 } from '../Data';

function PetInfo() {
  const [petCards, setPetCards] = useState([
    {
      id: 1,
      petImgSrc: data1.petImgSrc,
      petInfo: `${data1.name}/${data1.breed}/${data1.sex === 'M' ? '남아' : '여아'}/${new Date().getFullYear() - data1.birthYear}살/${data1.weight}kg`,
    },
    {
      id: 2,
      petImgSrc: data2.petImgSrc,
      petInfo: `${data2.name}/${data2.breed}/${data2.sex === 'M' ? '남아' : '여아'}/${new Date().getFullYear() - data2.birthYear}살/${data2.weight}kg`,
    },
  ]);

  const navigate = useNavigate();
  const handleAddPetCard = () => {
    if (petCards.length >= 3) {
      alert("최대 3마리까지 등록할 수 있습니다.");
    } else {
      navigate('/petinfoadd');
    }
    setPetCards([...petCards]);
  }

  const handleEdit = (id) => {
    const petInfoToEdit = petCards.find(petCard => petCard.id === id);
    if (petInfoToEdit) {
      navigate({
        pathname: '/petinfoadd',
        state: { petInfoToEdit } // 반려동물 정보를 상태로 전달
      });
    }
  }

  const handleDelete = (idToDelete) => {
    setPetCards(prevPetCards => prevPetCards.filter(petCard => petCard.id !== idToDelete));
  }

  // useEffect(() => {
  //   // data1의 반려동물 정보 가져오기
  //   const fetchPetInfo = async () => {
  //     // API 호출 및 데이터 가져오는 코드 작성...
  //     const petInfo = await fetch('/api/petsitter/select-pet', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         petId: data1.pet, // data1의 pet ID를 전송
  //       }),
  //     });
  //     const petData = await petInfo.json();
  //     setPetCards([petData]);
  //   };
  //
  //   fetchPetInfo();
  // }, []);

  return (
    <div>
      <HeaderWithNav />

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

        <div className="pet-card-components">
          {data1.pet ? (
            <>
              {petCards.map((petCard) => (
                <PetCard
                  key={petCard.id}
                  petImgSrc={petCard.petImgSrc}
                  petInfo={petCard.petInfo}
                  onEdit={() => handleEdit(petCard.id)}
                  onDelete={() => handleDelete(petCard.id)}
                />
              ))}
            </>
          ) : (
            <NoContents text="반려동물 정보" />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetInfo;