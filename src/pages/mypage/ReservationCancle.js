import React from 'react';
import '../../styles/ReserveCancle.css';
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import NoContents from '../../components/NoContents';

const ReservationCancle = () => {

  const cancelData = [
    {
      id: 1,
      reservePetImgSrc: "/imgs/dog3.jpeg",
      petInfo: "똑바로 / 2023.12.23 ~ 2023.12.24 / 50,000원",
      state: "취소완료"
    },
    {
      id: 2,
      reservePetImgSrc: "/imgs/dog3.jpeg",
      petInfo: "뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원",
      state: "취소완료"
    }
  ];

  return <>
    {/*<HeaderWithNav />*/}

    <div>
      <div className="mypage-bar" />
      <div className="mypage-bar-text">예약내역</div>
    </div>

    <Link to='/reservepetsitter'>
      <button className="reservation-cancle-nav1">펫시터</button>
    </Link>
    <Link to='/reservecancle'>
      <button className="reservation-cancle-nav2">취소내역</button>
    </Link>
    <Link to='/reservereview'>
      <button className="reservation-cancle-nav3">후기작성</button>
    </Link>

    <div className="mypage-navunderLine"></div>

    <div className="cancle-container">
      {cancelData.length > 0 ? (
          // 취소 내역이 있는 경우 ReservePetsitterCard를 출력합니다.
          cancelData.map((item) => (
      <ReservePetsitterCard  key={item.id}
                             reservePetImgSrc={item.reservePetImgSrc}
                            petInfo={item.petInfo}
                            state={item.state} />
        ))
        ) : (
        <NoContents text="취소 내역" />
        )}
    </div>

    <Footer />
  </>;
};

export default ReservationCancle;
