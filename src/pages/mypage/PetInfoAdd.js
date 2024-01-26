import React, { useState } from "react";
import "../../styles/StylePetInfoAdd.css";
import {Link} from "react-router-dom";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import axios from 'axios';
function PetInfoAdd() {
  const [postImg, setPostImg] = useState(null); // 파일 정보를 담을 state
  const [previewImg, setPreviewImg] = useState(null); // 미리보기 이미지를 담을 state

  const uploadFile = (e) => {
    const file = e.target.files[0];

    // 파일 정보 저장
    setPostImg(file);

    // 미리보기 이미지 설정
    const fileReader = new FileReader();
    fileReader.onload = () => setPreviewImg(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      // 서버에 파일 전송
      const formData = new FormData();
      formData.append('file', postImg);

      const response = await axios.post('https://your-server-endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <HeaderWithNav />

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
            <img className="pet-info-add-picture" src={previewImg} alt="Preview" />
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
                   placeholder="똑바로" />
          </div>

          <div className="pet-info-add-input">
            <label>견종</label>
            <input type="text"
                   placeholder="푸들" />
          </div>

          <div className="pet-info-add-input">
            <label>나이(출생년도)</label>
            <div className="pet-info-row">
              <input type="text"
                     placeholder="2012" />
              <span>년도</span>
            </div>
          </div>

          <div className="pet-info-add-input">
            <label>몸무게</label>
            <div className="pet-info-row">
              <input type="text"
                     placeholder="5" />
              <span>Kg</span>
            </div>
          </div>

          <div className="pet-info-add-radio">
            <label>성별</label>
            <div className="pet-info-row">
              <label>
                <input type="radio" />
                남
              </label>
              <label>
                <input type="radio" />
                여
              </label>
            </div>
          </div>

          <div className="pet-info-add-radio">
            <label>중성화</label>
            <div className="pet-info-row">
              <label>
                <input type="radio" />
                예
              </label>
              <label>
                <input type="radio" />
                아니오
              </label>
            </div>
          </div>

          <div className="pet-info-add-radio">
            <label>알러지</label>
            <div className="pet-info-row">
              <label>
                <input type="radio" />
                있음
              </label>
              <label>
                <input type="radio" />
                없음
              </label>
            </div>
          </div>

          <div className="pet-info-add-radio">
            <label>질병(피부병 등)</label>
            <div className="pet-info-row">
              <label>
                <input type="radio" />
                있음
              </label>
              <label>
                <input type="radio" />
                없음
              </label>
            </div>
          </div>
        </div>

        <div className="pet-info-add-area">
          <label>참고사항</label>
          <span>펫시터에게 전달되어야할 내용을 상세히 적어주세요 :)</span>
          <textarea
                 placeholder="ex) 식사횟수 및 배급량, 약복용법,
                              산책 시 주의사항 및 기타 특이사항
                              알러지 있는 경우: 어떤 음식 알러지" >

          </textarea>
        </div>

        <div className="pet-info-add-button-container">
          <Link to="/petInfo"
                style={{ textDecoration: 'none', color: 'white' }}>
            <button className="pet-info-add-button"
                    onClick={handleSubmit}>등록하기</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetInfoAdd;