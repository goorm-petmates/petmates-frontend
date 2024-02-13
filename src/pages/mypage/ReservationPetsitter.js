import React, { useState } from 'react';
import "../../styles/ReservaionPetsitter.css";
import NoContents from "../../components/NoContents";
import {Link} from "react-router-dom";
import HeaderWithNav from '../../components/HeaderWithNav';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import Footer from '../../components/Footer';
function ReservationPet() {
  const [checkedReservations, setCheckedReservations] = useState([false, false]);
  const [reservationStates, setReservationStates] = useState(["예약확인","승인대기", "예약완료"]);

  const handleCheckboxClick = (index) => {
    setCheckedReservations((prevChecked) => {
      const updatedChecked = [...prevChecked];
      updatedChecked[index] = !updatedChecked[index];
      return updatedChecked;
    });
  };

  const handleCancelReservation = () => {
    checkedReservations.forEach((isChecked, index) => {
      if (isChecked) {
        console.log(`예약이 취소되었습니다. Index: ${index}`);

        setReservationStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = "취소완료";
          return updatedStates;
        });
      }
    });
  };

  const handleConfirmReservation = (index) => {
    setReservationStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = "승인대기";
      return updatedStates;
    });
  };

  return (
    <div>
      <HeaderWithNav />

      <div>
        <div className="mypage-bar" />
        <div className="mypage-bar-text">예약내역</div>
      </div>

      <Link to='/reservepetsitter'>
        <button className="reservation-pet-nav1">펫시터</button>
      </Link>
      <Link to='/reservecancle'>
        <button className="reservation-pet-nav2">취소내역</button>
      </Link>
      <Link to='/reservereview'>
        <button className="reservation-pet-nav3">후기작성</button>
      </Link>

      <div className="mypage-navunderLine"></div>


      <button className="mypage-reservation-payment"
              onClick={handleCancelReservation}>
        예약취소
      </button>

      <div className="reservation-container">
        <div className="reservation-components">
          <label className="checked-width-1">
            <input
              className="reservepet-checkbox"
              type="checkbox"
              checked={checkedReservations[0]}
              onChange={() => handleCheckboxClick(0)}
            />
            <ReservePetsitterCard reservePetImgSrc="/imgs/dog3.jpeg"
                                  petInfo="똑바로 / 2023.12.23 ~ 2023.12.24 / 50,000원"
                                  state={reservationStates[0]}
                                  onClick={() => handleConfirmReservation(0)} />
          </label>
          <label className="checked-width-2">
            <input
              className="reservepet-checkbox"
              type="checkbox"
              checked={checkedReservations[1]}
              onChange={() => handleCheckboxClick(1)} />
            <ReservePetsitterCard reservePetImgSrc="/imgs/dog3.jpeg"
                                  petInfo="뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원"
                                  state={reservationStates[1]}
                                  onClick={() => handleConfirmReservation(1)} />
          </label>
          <label className="checked-width-3">
            <input
              className="reservepet-checkbox"
              type="checkbox"
              checked={checkedReservations[3]}
              onChange={() => handleCheckboxClick(2)} />
            <ReservePetsitterCard reservePetImgSrc="/imgs/dog3.jpeg"
                                  petInfo="뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원"
                                  state={reservationStates[2]}
                                  onClick={() => handleConfirmReservation(2)} />
          </label>

          <NoContents text="반려동물 정보" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ReservationPet;