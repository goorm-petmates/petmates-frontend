import React from 'react';
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import '../../styles/ReserveReview.css';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import NoContents from '../../components/NoContents';
import ReviewCard from '../../components/ReviewCard';

const ReserveReview = () => {

  return <>
    <HeaderWithNav />

    <div>
      <div className="mypage-bar" />
      <div className="mypage-bar-text">예약내역</div>
    </div>

    <Link to='/reservepetsitter'>
      <button className="reservation-review-nav1">펫시터</button>
    </Link>
    <Link to='/reservecancle'>
      <button className="reservation-review-nav2">취소내역</button>
    </Link>
    <Link to='/reservereview'>
      <button className="reservation-review-nav3">후기작성</button>
    </Link>

    <div className="mypage-navunderLine"></div>

    <div className="review-container">
      <ReservePetsitterCard reservePetImgSrc="/imgs/dog3.jpeg"
                            petInfo="똑바로 / 2023.12.23 ~ 2023.12.24 / 50,000원"
                            state="후기작성" />
      <ReservePetsitterCard reservePetImgSrc="/imgs/dog3.jpeg"
                            petInfo="뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원"
                            state="작성완료" />
      <NoContents text="후기 작성 내역" />
    </div>
    <ReviewCard reviewImgSrc="/imgs/dog3.jpeg"
                starRating="별점"/>


    <Footer />
  </>;
};

export default ReserveReview;