import React from "react";
import "../../styles/StyleMainMenuPetsitter.css";

export const MainMenuPetsitter = () => {
  return (
    <div className="mainMenuPetsitter-container">
      <p className="mainMenuPetsitter-text">
        PETMATES로 등록하시고 <br/>
        마음을 나누세요!
      </p>
      <div className="mainMenuPetsitter-title">
        펫시터 지원하기
      </div>
      <button className="mainMenuPetsitter-button">
        더보기
      </button>
    </div>
  );
};

export default MainMenuPetsitter;