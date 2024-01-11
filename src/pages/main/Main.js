import React from "react";
import "../../styles/StyleMain.css";
import {useState} from "react";

import MainMenuPetsitter from "./MainMenuPetsitter";
function Main() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="element">
      <div className="menu">
        <div className="main-menu">
          <button className="menu-icons left-icon">&lt;</button>
          <button className="menu-icons right-icon">&gt;</button>
          <div className="menu-title">펫시터</div>
          <div className="menu-text">css check</div>
          <div className="menu-list">
            <div className="list">1/3</div>
          </div>
        </div>
        <img className="list-img" alt="Dog" src="/imgs/dog3.jpeg" />
      </div>

      <div className="asideleft" />
      <div className="sesection" />
      <div className="asideright" />
      <img className="logo" alt="Logo" src="/imgs/Logo.png" />
      <div className="logintext">로그인</div>
      <div className="headerButtons" onMouseEnter={() => setShowMore(true)}
           onMouseLeave={() => setShowMore(false)}>
        <button className="headerButtons petsiter">펫시터</button>
        <button className="headerButtons community">커뮤니티</button>
        <button className="headerButtons mypage">마이페이지</button>
      </div>

      {showMore && (
        <div style={{marginTop: "165px", backgroundColor: "red", width: "1000px", height: "300px"}}></div>
      )}
      <MainMenuPetsitter className="MainMenuPetsiter1"/>
      <MainMenuPetsitter className="MainMenuPetsiter2"/>

      <button className="customerService">고객센터</button>
      <div className="copyright">2024</div>
    </div>
  );
}

export default Main;