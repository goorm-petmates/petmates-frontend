import React from "react";
import "../../styles/StyleMain.css";
import Header from "../../components/Header";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import { MainMenuPetsitter } from "../../components/MainMenuPetsitter";
import Nav from "../../components/Nav";
function Main() {
  return (
    <div className="element">
      <Header />
      <Nav/>
      <LeftAside />
      <RightAside />

      <div className="menu">
        <div className="main-menu">
          <button className="menu-icons left-icon">&lt;</button>
          <button className="menu-icons right-icon">&gt;</button>
          <div className="menu-container">
            <div className="menu-title">펫시터</div>
            <div className="menu-text">css check</div>
            <div className="menu-list">
              <div className="list">1 / 3</div>
            </div>
            <img className="list-img" alt="Dog" src="/imgs/dog3.jpeg" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="main-petsitter-components">
          <MainMenuPetsitter text="PETMATES로 등록하시고 마음을 나누세요!" />
          <MainMenuPetsitter text="펫시터 경력 40년차!" />
          <MainMenuPetsitter text="PETMATES로 선택한 환경에서 편안하게 맡겨주세요 !" />
          <MainMenuPetsitter text="제일가는 펫시터" />
        </div>
      </div>
    </div>
  );
}

export default Main;