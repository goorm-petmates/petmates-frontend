import React, { useEffect, useState } from 'react';
import "../../styles/ReservaionPetsitter.css";
import NoContents from "../../components/NoContents";
import {Link} from "react-router-dom";
import HeaderWithNav from '../../components/HeaderWithNav';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import Footer from '../../components/Footer';
import {data1} from '../Data';

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

  if (data1.reservations_status === '') {
    return <NoContents text="예약 내역이 없습니다." />;
  }

  // fetch('https://api.petmates.co.kr/api/members/test/api/reserve/{memberId}') // 요청을 보낼 URL을 지정합니다.
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('네트워크 에러 발생'); // 오류 처리를 위해 HTTP 상태 코드를 확인합니다.
  //     }
  //     return response.json(); // JSON 형식의 응답을 파싱하여 Promise를 반환합니다.
  //   })
  //   .then(data => {
  //     console.log(data); // JSON 데이터를 콘솔에 출력합니다.
  //     // 여기서 데이터를 처리하거나 다른 작업을 수행할 수 있습니다.
  //   })
  //   .catch(error => {
  //     console.error( error); // 오류가 발생하면 콘솔에 오류 메시지를 출력합니다.
  //   });


  return (
    <div>
      {/*<HeaderWithNav />*/}

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
          {data1.reservations_status ==='Y' ? (
            <>
              <label className="checked-width-1">
                <input
              className="reservepet-checkbox"
              type="checkbox"
              checked={checkedReservations[0]}
              onChange={() => handleCheckboxClick(0)}
                />
               <ReservePetsitterCard reservePetImgSrc="/imgs/dog3.jpeg"
                                  petInfo="똑바로 / 2023.12.23 ~ 2023.12.24 / 50,000원"
                                  state={reservationStates[1]}
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

            </>
          ) : (
            <NoContents text="예약 내역이 없습니다." />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ReservationPet;