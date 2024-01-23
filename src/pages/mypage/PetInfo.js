import React from "react";
import {Link} from "react-router-dom";
import NoContents from "../../components/NoContents";
import "../../styles/StylePetInfo.css";
import PetCard from "../../components/PetCard";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';

function PetInfo() {

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
        <button className="mypage-petinfo-add">
          <Link to='/petInfoadd'
                style={{ textDecoration: 'none', color: 'white' }}>
            등록하기
          </Link>
        </button>

        <div className="pet-card-components">
          <NoContents text="반려동물 정보"></NoContents>
          <PetCard petImgSrc="/imgs/dog3.jpeg"
                   petInfo="똑바로/토이푸들/여아/12살/5kg" />
          <PetCard petImgSrc="/imgs/dog3.jpeg"
                  petInfo="아지/말티즈/여아/12살/5kg" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetInfo;