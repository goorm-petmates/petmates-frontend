import React, { useState } from "react";
import "../../styles/StylePetInfoAdd.css";
import { Link, useNavigate } from 'react-router-dom';
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { data1 } from '../Data';
import MemberFormModal from '../../components/MemberFormModal';
// import axios from 'axios';
// import { handlers } from '../../mocks/handlers';
function PetInfoAdd() {
  const [petName, setPetName] = useState("");
  const [breedOfDog, setbreedOfDog] = useState("");
  const [birth, setBirth] = useState("");
  const [weight, setWeight] = useState("");


  const [gender, setGender] = useState(false);
  const [neutering, setNeutering] = useState(false);
  const [allergy, setAllergy] = useState(false);
  const [trouble, setTrouble] = useState(false);
  const [moreInfo, setMoreInfo] = useState("");

  const [postImg, setPostImg] = useState(null); // 파일 정보를 담을 state
  const [previewImg, setPreviewImg] = useState(null); // 미리보기 이미지를 담을 state

  const uploadFile = (e) => {
    const file = e.target.files[0];

    // 허용된 확장자 배열
    const allowedExtensions = ["png", "jpg", "jpeg"];

    // 파일의 확장자를 가져와 소문자로 변환합니다.
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    // 확장자가 허용된 확장자인지 확인합니다.
    if (!allowedExtensions.includes(fileExtension)) {
      // 허용되지 않은 확장자면 알림을 띄우고 파일 선택을 취소합니다.
      alert("파일은 'png', 'jpg', or 'jpeg'만 업로드 할 수 있습니다.");
      setPostImg(null);
      return;
    }

    // 파일 크기를 가져와 1MB로 제한합니다.
    const maxSize = 1024 ** 2 * 1; // 1MB

    if (file.size > maxSize) {
      // 파일 크기가 1MB를 초과하면 알림을 띄우고 파일 선택을 취소합니다.
      alert(" 파일 크기가 1MB를 초과했습니다.");
      setPostImg(null);
      return;
    }
    // 파일 정보 저장
    setPostImg(file);
    console.log('postImg: ',postImg);

    // 미리보기 이미지 설정
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewImg(fileReader.result);

      // const base64Data = fileReader.result.split(',')[1];
      console.log('Base64 Encoded Data:', fileReader.result);
    };
    fileReader.readAsDataURL(file);

    fileReader.onerror = (error) => {
      console.error(error);
    };
  };

  const navigate = useNavigate();
  const [petCards, setPetCards] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    if (!petName || !breedOfDog || !birth || !weight || gender === undefined || neutering=== undefined || allergy=== undefined || trouble=== undefined || !moreInfo) {

      setModalMessage("모든 필수 입력 항목을 채워주세요.");
      openModal();
     } else {
      // const newPetCard = {
      //   id: petCards.length + 1, // 기존 펫 카드의 개수에 1을 더한 값을 새로운 id로 사용
      //   petImgSrc: previewImg, // 미리보기 이미지 사용
      //   petInfo: `${petName}/${breedOfDog}/${gender === '남' ? '남아' : '여아'}/${new Date().getFullYear() - birth}살/${weight}kg`, // 입력된 정보 사용
      // };
      //
      // // 새로운 펫 카드를 기존의 펫 카드 배열에 추가
      // setPetCards([...petCards, newPetCard]);
      //
      // navigate('/petinfo', { state: { newPetCard } });
      // alert("반려동물 정보가 등록되었습니다.");

      console.log(petName);
      console.log(breedOfDog);
      console.log(birth);
      console.log(weight);
      console.log(gender);
      console.log(neutering);
      console.log(allergy);
      console.log(trouble);
      console.log(moreInfo);

      const formData = new FormData();
      formData.append('name', petName);
      formData.append('breed', breedOfDog);
      formData.append('sex', gender);
      formData.append('birthYear', birth);
      formData.append('weight', weight);
      formData.append('isNeutering', neutering);
      formData.append('isAllergy', allergy);
      formData.append('isDisease', trouble);
      formData.append('etc', moreInfo);
      formData.append('photo', postImg);
      const url_add = 'https://petmates.co.kr/api/my-page/pet/add';
      try {
        const response_add = await fetch(url_add, {
          method: 'POST',
          credentials: 'include',
          body: formData,
        });

        if (!response_add.ok) {
          throw new Error('펫 정보 추가 실패');
        }

        console.log('펫 정보 추가 성공');
        // 성공 시 추가 작업 수행

        const responseData = await response_add.json();
        const petId = responseData.id;

        const url_photo = `https://petmates.co.kr/api/my-page/pet/${petId}/photo`;
        const data_photo = new FormData();
        data_photo.append("photo", postImg);
        data_photo.append("pet_id", petId);

        const response_photo = await fetch(url_photo, {
          method: 'POST',
          credentials: 'include',
          body: data_photo,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (!response_photo.ok) {
          console.log(response_photo.error);
          throw new Error('펫 사진 추가 실패');
        }

        console.log('펫 및 사진 추가 완료');
        console.log("photo: ", postImg);

        const newPetCard = {
          id: petCards.length + 1,
          petImgSrc: previewImg,
          petInfo: `${petName}/${breedOfDog}/${gender === '남' ? '남아' : '여아'}/${new Date().getFullYear() - birth}살/${weight}kg`,
        };

        setPetCards([...petCards, newPetCard]);
        navigate('/petinfo', { state: { newPetCard } });
        setModalMessage('반려동물 정보가 등록되었습니다.');
        openModal();
      } catch (error) {
        console.error(error);
        setModalMessage('펫 추가 및 사진 업로드 중 오류가 발생했습니다.');
        openModal();
      }
    }
  };

  //   try {
  //     // 펫 추가 요청 보내기
  //     const response_add = await fetch(url_add, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data_add),
  //     });
  //
  //     // 응답 확인
  //     if (!response_add.ok) {
  //       throw new Error(response_add.error);
  //     }
  //
  //     // 응답 데이터 파싱
  //     const responseData = await response_add.json();
  //     const petId = responseData.id; // 응답에서 펫 아이디 추출
  //
  //     // 펫 사진 추가 요청 보내기
  //     const url_photo = `/api/my-page/pet/${petId}/photo`;
  //     const data_photo = {
  //       photo: postImg,
  //       pet_id: petId,
  //     };
  //
  //     const response_photo = await fetch(url_photo, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       body: JSON.stringify(data_photo),
  //     });
  //
  //     // photo 응답 확인
  //     if (!response_photo.ok) {
  //       console.log(response_photo.error);
  //       throw new Error('펫 사진 추가 실패');
  //     }
  //     // 응답 성공 시
  //     console.log('펫 및 사진 추가 완료');
  //
  //     const newPetCard = {
  //       id: petCards.length + 1, // 기존 펫 카드의 개수에 1을 더한 값을 새로운 id로 사용
  //       petImgSrc: previewImg, // 미리보기 이미지 사용
  //       petInfo: `${petName}/${breedOfDog}/${gender === '남' ? '남아' : '여아'}/${new Date().getFullYear() - birth}살/${weight}kg`, // 입력된 정보 사용
  //     };
  //
  //     // 새로운 펫 카드를 기존의 펫 카드 배열에 추가
  //     setPetCards([...petCards, newPetCard]);
  //
  //     navigate('/petinfo', { state: { newPetCard } });
  //
  //     setModalMessage('반려동물 정보가 등록되었습니다.');
  //     openModal();
  //   } catch (error) {
  //     console.log(error);
  //     setModalMessage('펫 추가 및 사진 업로드 중 오류가 발생했습니다.');
  //     openModal();
  //   }
  //
  // };

  const handlePetAdd = (e) => {
    if(e.target.className === "petName"){
      setPetName(e.target.value);
    }if(e.target.className === "breedOfDog"){
      setbreedOfDog(e.target.value);
    }if(e.target.className === "birth"){
      setBirth(e.target.value);
    }if(e.target.className === "weight"){
      setWeight(e.target.value);
    }if(e.target.className === "gender"){
      setGender(e.target.value);
    }if(e.target.className === "neutering"){
      setNeutering(e.target.value);
    }if(e.target.className === "allergy"){
      setAllergy(e.target.value);
    }if(e.target.className === "trouble"){
      setTrouble(e.target.value);
    }if(e.target.className === "moreInfo"){
      setMoreInfo(e.target.value);
    }

    // 공백 여부 체크
    if (e.data === " " || e.data === 0) {
      console.log("공백은 입력할 수 없습니다.");
    }
  }

  return (
    <div>
      {/*<HeaderWithNav />*/}

      <div>
        <div className="mypage-bar" />
        <div className="mypage-bar-text">내정보</div>
      </div>

      <Link to='/myinfo'>
        <button className="mypage-petinfo-nav1">내정보</button>
      </Link>
      <Link to='/petInfo'>
        <button className="mypage-petinfo-nav2">반려동물 정보</button>
      </Link>

      <div className="mypage-navunderLine"></div>


      <div className="pet-info-add-container">
        <div className="pet-info-add">
          {showModal && (
            <MemberFormModal
              title="펫 정보 등록"
              text={modalMessage}
              onClose={closeModal}
            />
          )}
          <div className="pet-info-add-fileupload">
            {/* 사진 미리보기 */}
            {previewImg && (
              <img className="pet-info-add-picture" src={previewImg} alt="" />
            )}
            <input
              className="pet-info-add-img-input"
              type="file"
              onChange={uploadFile}
              accept="image/*"
              style={{ display: 'none' }}
              id="fileInput"
            />
            <label className="pet-info-add-picture-button"
                   htmlFor="fileInput">사진 추가</label>
          </div>

          <div className="pet-info-adds">
            <div className="pet-info-add-inputs">
              <div className="pet-info-add-input">
                <label>이름</label>
                <input type="text"
                       placeholder={"똑바로"}
                       className="petName"
                       onInput={handlePetAdd} />
              </div>

              <div className="pet-info-add-input">
                <label>견종</label>
                <input type="text"
                       placeholder={"푸들"}
                       className="breedOfDog"
                       onInput={handlePetAdd} />
              </div>

              <div className="pet-info-add-input">
                <label>나이(출생년도)</label>
                <div className="pet-info-row">
                  <input type="text"
                         placeholder="2012"
                         className="birth"
                         onInput={handlePetAdd} />
                  <span>년도</span>
                </div>
              </div>

              <div className="pet-info-add-input">
                <label>몸무게</label>
                <div className="pet-info-row">
                  <input type="text"
                         placeholder="5"
                         className="weight"
                         onInput={handlePetAdd} />
                  <span>Kg</span>
                </div>
              </div>

              <div className="pet-info-add-radio">
                <label>성별</label>
                <div className="pet-info-row">
                  <label>
                    <input type="radio"
                           className="gender"
                           checked={gender === true}
                           onChange={() => setGender(true)} />
                    남
                  </label>
                  <label>
                    <input type="radio"
                           className="gender"
                           checked={gender === true}
                           onChange={() => setGender(gender)} />
                    여
                  </label>
                </div>
              </div>

              <div className="pet-info-add-radio">
                <label>중성화</label>
                <div className="pet-info-row">
                  <label>
                    <input type="radio" className="neutering"
                           checked={neutering === true}
                           onChange={() => setNeutering(true)} />
                    예
                  </label>
                  <label>
                    <input type="radio" className="neutering"
                           checked={neutering === false}
                           onChange={() => setNeutering(false)} />
                    아니오
                  </label>
                </div>
              </div>

              <div className="pet-info-add-radio">
                <label>알러지</label>
                <div className="pet-info-row">
                  <label>
                    <input type="radio" className="allergy"
                           checked={allergy === true}
                           onChange={() => setAllergy(true)} />
                    있음
                  </label>
                  <label>
                    <input type="radio" className="allergy"
                           checked={allergy === false}
                           onChange={() => setAllergy(false)} />
                    없음
                  </label>
                </div>
              </div>

              <div className="pet-info-add-radio">
                <label>질병(피부병 등)</label>
                <div className="pet-info-row">
                  <label>
                    <input type="radio" className="trouble"
                           checked={trouble === true}
                           onChange={() => setTrouble(true)} />
                    있음
                  </label>
                  <label>
                    <input type="radio" className="trouble"
                           checked={trouble === false}
                           onChange={() => setTrouble(false)} />
                    없음
                  </label>
                </div>
              </div>

              <div className="pet-info-add-area">
                <label>참고사항</label>
                <span>펫시터에게 전달되어야할 내용을 상세히 적어주세요 :)</span>
                <textarea className="moreInfo"
                          value={moreInfo}
                          onInput={handlePetAdd}
                          placeholder="ex) 식사횟수 및 배급량, 약복용법,
                              산책 시 주의사항 및 기타 특이사항
                              알러지 있는 경우: 어떤 음식 알러지">

                </textarea>

                <button className="pet-info-add-button"
                        onClick={handleSubmit}>등록하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetInfoAdd;