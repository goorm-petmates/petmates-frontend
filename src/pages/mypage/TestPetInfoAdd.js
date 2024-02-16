import React, { useState } from "react";
import "../../styles/StylePetInfoAdd.css";
import { Link, useNavigate } from 'react-router-dom';
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { data1 } from '../Data';
// import axios from 'axios';
// import { handlers } from '../../mocks/handlers';
function TestPetInfoAdd() {
  const [petName, setPetName] = useState("");
  const [breedOfDog, setbreedOfDog] = useState("");
  const [birth, setBirth] = useState("");
  const [weight, setWeight] = useState("");


  const [gender, setGender] = useState("");
  const [neutering, setNeutering] = useState("");
  const [allergy, setAllergy] = useState("");
  const [trouble, setTrouble] = useState("");
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
  const handleSubmit = async () => {
    if (!petName || !breedOfDog || !birth || !weight || !gender || !neutering || !allergy || !trouble || !moreInfo) {
      alert("모든 필수 입력 항목을 채워주세요.");
    } else {
      navigate('/petinfo');

      console.log(petName);
      console.log(breedOfDog);
      console.log(birth);
      console.log(weight);
      console.log(gender);
      console.log(neutering);
      console.log(allergy);
      console.log(trouble);
      console.log(moreInfo);
    }

  //   try {
  //     const response = await fetch('/api/my-page/pet/add', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         storedFileName: "", // 파일 이름이나 경로를 전송합니다.
  //         name: petName,
  //         breed: breedOfDog,
  //         sex: gender,
  //         birthYear: birth,
  //         weight: weight,
  //         isNeutering: neutering,
  //         isAllergy: allergy,
  //         isDisease: trouble,
  //         etc: moreInfo
  //       }),
  //     });
  //
  //     const data = await response.json();
  //
  //     if (response.ok) {
  //       if (data.result === "success") {
  //         alert("반려동물 정보 등록에 성공했습니다.");
  //         navigate('/petinfo');
  //       } else {
  //         alert("반려동물 정보 등록에 실패했습니다.");
  //       }
  //     } else {
  //       // 서버에서 에러 응답을 보낸 경우
  //       alert("서버 오류로 반려동물 정보를 등록할 수 없습니다.");
  //     }
  //   } catch (error) {
  //     // 네트워크 오류 등으로 인한 요청 실패
  //     console.error("Error while submitting pet info:", error);
  //     alert("서버 오류로 반려동물 정보를 등록할 수 없습니다.");
  //   }
  //
  //   const formData = new FormData();
  //   formData.append('photo', postImg); // 사진 파일 첨부
  //   formData.append('pet_id', '1'); // 반려동물 ID (임시)
  //
  //   // MSW 핸들러로 요청 보내기
  //   const response = await fetch('/api/my-page/pet/1/photo', {
  //     method: 'POST',
  //     body: formData,
  //   });
  //
  //   if (response.ok) {
  //     const data = await response.json();
  //     if (data.result === "success") {
  //       alert("반려동물 정보 등록에 성공했습니다.");
  //       navigate('/petinfo');
  //     } else {
  //       alert("반려동물 정보 등록에 실패했습니다.");
  //     }
  //   } else {
  //     alert("서버 오류로 반려동물 정보를 등록할 수 없습니다.");
  //   }
  };

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
        <div className="pet-info-add-fileupload">
          {/* 사진 미리보기 */}
          {previewImg && (
            <img className="pet-info-add-picture" src={data1.profile ? data1.profile : previewImg} alt="" />
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

        <div className="pet-info-add-inputs">
          <div className="pet-info-add-input">
            <label>이름</label>
            <input type="text"
                   placeholder={"똑바로"}
                   className="petName"
                   onInput={handlePetAdd}/>
          </div>

          <div className="pet-info-add-input">
            <label>견종</label>
            <input type="text"
                   placeholder={"푸들"}
                   className="breedOfDog"
                   onInput={handlePetAdd}/>
          </div>

          <div className="pet-info-add-input">
            <label>나이(출생년도)</label>
            <div className="pet-info-row">
              <input type="text"
                     placeholder="2012"
                     className="birth"
                     onInput={handlePetAdd}/>
              <span>년도</span>
            </div>
          </div>

          <div className="pet-info-add-input">
            <label>몸무게</label>
            <div className="pet-info-row">
              <input type="text"
                     placeholder="5"
                     className="weight"
                     onInput={handlePetAdd}/>
              <span>Kg</span>
            </div>
          </div>

          <div className="pet-info-add-radio">
            <label>성별</label>
            <div className="pet-info-row">
              <label>
                <input type="radio"
                       className="gender"
                       checked={gender === "남"}
                       onChange={()=>setGender("남")}/>
                남
              </label>
              <label>
                <input type="radio"
                       className="gender"
                       checked={gender === "여"}
                       onChange={()=>setGender("여")}/>
                여
              </label>
            </div>
          </div>

          <div className="pet-info-add-radio">
            <label>중성화</label>
            <div className="pet-info-row">
              <label>
                <input type="radio" className="neutering"
                       checked={neutering === "예"}
                       onChange={()=>setNeutering("예")}/>
                예
              </label>
              <label>
                <input type="radio" className="neutering"
                       checked={neutering === "아니오"}
                       onChange={()=>setNeutering("아니오")}/>
                아니오
              </label>
            </div>
          </div>

          <div className="pet-info-add-radio">
            <label>알러지</label>
            <div className="pet-info-row">
              <label>
                <input type="radio" className="allergy"
                       checked={allergy === "있음"}
                       onChange={()=>setAllergy("있음")}/>
                있음
              </label>
              <label>
                <input type="radio" className="allergy"
                       checked={allergy === "없음"}
                       onChange={()=>setAllergy("없음")}/>
                없음
              </label>
            </div>
          </div>

          <div className="pet-info-add-radio">
            <label>질병(피부병 등)</label>
            <div className="pet-info-row">
              <label>
                <input type="radio" className="trouble"
                       checked={trouble === "있음"}
                       onChange={()=>setTrouble("있음")}/>
                있음
              </label>
              <label>
                <input type="radio" className="trouble"
                       checked={trouble === "없음"}
                       onChange={()=>setTrouble("없음")}/>
                없음
              </label>
            </div>
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
                              알러지 있는 경우: 어떤 음식 알러지" >

          </textarea>
        </div>

        <div className="pet-info-add-button-container">
          <button className="pet-info-add-button"
                  onClick={handleSubmit}>등록하기</button>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TestPetInfoAdd;