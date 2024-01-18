import React from "react";
import "../styles/StylePetCard.css";

function PetCard(props){
  const { petImgSrc, petInfo } = props;

  return(
    <div className="pet-card-container">
      <div className="pet-card">
        <img className="pet-img" src={petImgSrc} alt="pet-img"/>
        <div className="pet-info">
          {petInfo}
        </div>
        <div className="pet-card-buttons">
          <button className="pet-card-button-delete">삭제하기</button>
          <button className="pet-card-button-edit">수정하기</button>
        </div>
      </div>
    </div>
  );
}

export default PetCard;