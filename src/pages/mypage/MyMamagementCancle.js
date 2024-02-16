import React from 'react';
import '../../styles/MyManagementCancle.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import NoContents from '../../components/NoContents';
import { data1 } from '../Data';

const MyMamagementCancle = () => {
  const { reservations_status } = data1;

  return (
    <>
      {/*<HeaderWithNav />*/}

      <div>
        <div className='mypage-bar' />
        <div className='management-bar-text'>펫시터 관리</div>
      </div>

      <Link to='/mymanagement'>
        <button className='mymanagement-cancle-nav1'>예약요청</button>
      </Link>
      <Link to='/mymanagementcancle'>
        <button className='mymanagement-cancle-nav2'>취소내역</button>
      </Link>

      <div className='mypage-navunderLine'></div>

      <div className='mymanagement-cancle-container'>
        {reservations_status === 'Y' ? (
          <>
            <ReservePetsitterCard
              reservePetImgSrc='/imgs/pet_img_1.png'
              petInfo='똑바로 / 2024.02.16 ~ 2024.02.16 / 16,500원'
              state='취소완료'
            />
            <ReservePetsitterCard
              reservePetImgSrc='/imgs/dog3.jpeg'
              petInfo='뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원'
              state='취소완료'
            />
          </>
        ) : (
          <NoContents text='취소 내역' />
        )}
      </div>

      <Footer />
    </>
  );
};

export default MyMamagementCancle;
