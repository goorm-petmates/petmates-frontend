import React from "react";
import "../../styles/ReservaionPetsitter.css";
import NoContents from "../../components/NoContents";
import {Link} from "react-router-dom";
import HeaderWithNav from '../../components/HeaderWithNav';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import Footer from '../../components/Footer';
function ReservationPet() {
  const [selectedPetInfo, setSelectedPetInfo] = React.useState(null);
  const handlePaymentClick = () => {
    // 선택된 반려동물 정보가 있을 때에만 콘솔에 출력
    if (selectedPetInfo) {
      console.log("선택된 반려동물 정보:", selectedPetInfo);
    }
  };
  const handlePetInfoClick = (petInfo) => {
    // ReservePetAwait 컴포넌트가 클릭되었을 때 선택된 반려동물 정보 설정
    setSelectedPetInfo(petInfo);
  };

  return (
    <div>
      <HeaderWithNav />

      <div>
        <div className="mypage-bar" />
        <div className="mypage-bar-text">예약내역</div>
      </div>

      <Link to='/reservationpet'>
        <button className="reservation-nav1">펫시터</button>
      </Link>
      <Link to='/reservecancle'>
        <button className="reservation-nav2">취소내역</button>
      </Link>
      <Link to='/reservereview'>
        <button className="reservation-nav3">후기작성</button>
      </Link>

      <div className="mypage-navunderLine"></div>


      <button className="mypage-reservation-payment"
              onClick={handlePaymentClick}>
        예약취소
      </button>

      <div className="reservation-container">
        <div className="reservation-components">
          <ReservePetsitterCard petInfo="아지/ 2024.01.19 11시 ~ 14시"
                                state="결제하기"
                                onClick={() => handlePetInfoClick("아지/ 2024.01.19 11시 ~ 14시")} />
          <ReservePetsitterCard petInfo="똑바로 / 2023.12.23 ~ 2023.12.24 / 50,000원"
                                state="승인대기" />
          <ReservePetsitterCard petInfo="뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원"
                                state="예약완료" />
          <NoContents text="반려동물 정보" />
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default ReservationPet;