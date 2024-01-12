import React from "react";
import "../../styles/StyleMain.css";
import Header from "../../components/Header";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import MainMenuPetsitter from "./MainMenuPetsitter";
function Main() {
  return (
    <div className="element">
      <Header />
      <LeftAside />
      <RightAside />

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

      <div className="sesection">
        <MainMenuPetsitter className="MainMenuPetsitter1" />
        <MainMenuPetsitter className="MainMenuPetsitter2" />
      </div>
    </div>
  );
}

export default Main;