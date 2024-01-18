import React from 'react';
import Header from '../../components/Header';
import LeftAside from '../../components/LeftAside';
import RightAside from '../../components/RightAside';
import Nav from '../../components/Nav';
import {Link} from "react-router-dom";
import "../../styles/StyleMyInfo.css";
const MyInfo = () => {
  return (
    <div>
      <Header />
      <Nav />
      <LeftAside />
      <RightAside />

      <div>
        <div className="mypage-bar" />
        <div className="mypage-bar-text">내정보</div>
      </div>

      <div className="mypage-navunderLine"></div>

      <Link to='/myinfo'>
        <button className="mypage-myinfo-nav1">내정보</button>
      </Link>
      <Link to='/petInfo'>
        <button className="mypage-myinfo-nav2">반려동물 정보</button>
      </Link>

      <div className="myinfo-container">
        <div className="myinfo">
          <div className="myinfo-picture"></div>
          <div className="myinfo-inputs">
            <div className="myinfo-name">닉네임</div>
            <input className="myinfo-nameInput"></input>
            <div className="myinfo-email">이메일</div>
            <input className="myinfo-emailInput"></input>
            <div className="myinfo-phone">휴대폰번호</div>
            <input className="myinfo-phoneInput"></input>
            <div className="myinfo-address">주소</div>
            <input className="myinfo-addressInput"></input>
          </div>
          <div className="myinfo-buttons">
            <button className="myinfo-edit">수정하기</button>
            <button className="myinfo-quit">탈퇴하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
