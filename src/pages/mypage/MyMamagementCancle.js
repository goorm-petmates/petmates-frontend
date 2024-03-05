import React, { useEffect, useState } from 'react';
import '../../styles/MyManagementCancle.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import NoContents from '../../components/NoContents';

const MyMamagementCancle = () => {
  const [cancleInfo, setCancleInfo] = useState([]);
  const petsitterId = 1;

  useEffect(()=>{
    fetch(`https://petmates.co.kr/api/my-page/petsitter/cancel/${petsitterId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        const formData = res.data.map((info) => ({
          id: info.id,
          reservePetImgSrc: info.reservePetImgSrc,
          petInfo: `${info.name}  ${info.startDate}~${info.endDate}  ${info.totalPrice}원`,
          state: info.state ,
        }));

        setCancleInfo(formData);
      })
  },[])

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

      <div className="management-cancle">
        <div className='mymanagement-cancle-container'>
          {/*<ReservePetsitterCard*/}
          {/*  reservePetImgSrc='/imgs/dog3.jpeg'*/}
          {/*  petInfo='뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원'*/}
          {/*  state='취소완료'*/}
          {/*/>*/}

          {cancleInfo.length > 0 ? (
            cancleInfo.map((info) => (
              <ReservePetsitterCard
                reservePetImgSrc={info.reservePetImgSrc}
                petInfo={info.petInfo}
                state={info.state}
              />
            ))
          ) : (
            <NoContents text='취소 내역' />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyMamagementCancle;
