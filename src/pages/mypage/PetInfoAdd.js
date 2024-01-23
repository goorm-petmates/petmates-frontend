import React from "react";
import "../../styles/StylePetInfoAdd.css";
import {Link} from "react-router-dom";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
function PetInfoAdd() {

  return (
    <div className="pet-info-add-element">
      <HeaderWithNav/>

      <div>
        <div className="mypage-bar"/>
        <div className="mypage-bar-text">내정보</div>
      </div>

      <div className="mypage-navunderLine"></div>

      <Link to='/myinfo'>
        <button className="mypage-petinfo-nav1">내정보</button>
      </Link>
      <Link to='/petInfo'>
        <button className="mypage-petinfo-nav2">반려동물 정보</button>
      </Link>

      <div className="pet-info-add-container">
        <div className="pet-info-add-picture"></div>
        <div className="pet-info-add-inputs">

        </div>
        <Link to='/petInfo'
              style={{ textDecoration: 'none', color: 'white' }}>
          <button className="pet-info-add-button">등록하기</button>
        </Link>



      </div>
      <Footer/>
    </div>
  );
}

export default PetInfoAdd;