import React from "react";
import "../../styles/PetInfoAdd.css";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import {Link} from "react-router-dom";
function PetInfoAdd() {

  return (
    <div className="pet-info-add-element">
      <Header/>
      <Nav/>
      <LeftAside/>
      <RightAside/>

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
    </div>
  );
}

export default PetInfoAdd;