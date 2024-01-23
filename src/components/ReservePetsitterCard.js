import React from "react";
import "../styles/ReservePetsitterCard.css";
import {useState} from "react";
function ReservationPetsitterCard(props) {
  const {petInfo, state} = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
      <div className="reservepet">
        <div className={`reservepet-checkbox ${isChecked ? "checked" : ""}`}
             onClick={handleCheckboxClick}>
        </div>
        <label className="checked-width" onClick={handleCheckboxClick}></label>
        <img className="reservationpet-img"
             src="/imgs/dog3.jpeg"
             alt="petsitter-image"/>
        <div className="reservepet-info">
          {petInfo}
        </div>
        <button className="reservation-pet-button"
                style={
                  state === "승인대기" ? {
                    backgroundColor: "#ffffff",
                    border: "1px solid #ff9900",
                    color: "#ff9900",
                    cursor: "auto",
                  } : state === "예약완료" ? {
                    backgroundColor: "#D9D9D9",
                    border: "none",
                    color: "#ffffff",
                    cursor: "auto",
                  } : {}
                }
        >
          {state}
        </button>
      </div>
  );
}

export default ReservationPetsitterCard;