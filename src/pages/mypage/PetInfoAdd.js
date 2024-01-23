import React from "react";
import "../../styles/StylePetInfoAdd.css";
import {Link} from "react-router-dom";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
function PetInfoAdd() {

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
        <div>
          <img className="pet-info-add-picture"
               src="/imgs/Logo-Icon.png" alt="기본 로고" />
          <button className="pet-info-add-picture-button">사진 추가</button>
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
          <input type="textarea"
                 placeholder="ex) 식사횟수 및 배급량, 약복용법,
                              산책 시 주의사항 및 기타 특이사항
                              알러지 있는 경우: 어떤 음식 알러지" />
        </div>

        <div className="pet-info-add-button-container">
          <Link to="/petInfo"
                style={{ textDecoration: 'none', color: 'white' }}>
            <button className="pet-info-add-button">등록하기</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetInfoAdd;