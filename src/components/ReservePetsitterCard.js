import React from "react";
import "../styles/ReservePetsitterCard.css";
function ReservationPetsitterCard(props) {
  const {reservePetImgSrc, petInfo, state, onClick} = props;

  return (
      <div className="reservepet">
        <img className="reservationpet-img"
             src={reservePetImgSrc}
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
                  } : state === "취소완료" ? {
                    backgroundColor: "#D9D9D9",
                    border: "none",
                    color: "#ffffff",
                    cursor: "auto",
                  } : state === "후기작성" ? {
                    backgroundColor: "#ff9900",
                    border: "none",
                    color: "#ffffff",
                    cursor: "pointer",
                  } : state === "작성완료" ? {
                    backgroundColor: "#D9D9D9",
                    border: "none",
                    color: "#ffffff",
                    cursor: "auto",
                  } : {}
                } onClick={onClick}>
          {state}
        </button>
      </div>
  );
}

export default ReservationPetsitterCard;