import React from 'react';
import '../../styles/StyleMain.css';
import { MainMenuPetsitter } from '../../components/MainMenuPetsitter';
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';

function Main() {
  return (
    <div className>
      <HeaderWithNav/>

      <div className="main-container">
        <div className="main-banner">
          <div className="menu-icons">
            <button className="left-icon">&lt;</button>
            <button className="right-icon">&gt;</button>
          </div>
          <div className="menu-contents">
            <div className="menu-left">
              <div className="menu-title">펫시터</div>
              <div className="menu-text">css check</div>
              <div className="menu-list">1 / 3</div>
            </div>
            <img className="menu-img" alt="Dog" src="/imgs/dog3.jpeg"/>
          </div>
        </div>

        <div className="main-petsitter-components">
          <MainMenuPetsitter text="PETMATES로 등록하시고 마음을 나누세요!" />
          <MainMenuPetsitter text="PETMATES로 선택한 환경에서 편안하게 맡겨주세요 !" />
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Main;
