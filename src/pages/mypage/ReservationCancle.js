import React from 'react';
import '../../styles/ReserveCancle.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import NoContents from '../../components/NoContents';
import { data1, data2 } from '../Data';

const ReservationCancle = () => {
  const renderReservationCards = () => {
    if (data1.reservations_cancle === 'N') {
      // 취소 내역이 없는 경우 NoContents 컴포넌트 출력
      return <NoContents text='취소 내역' />;
    } else {
      // 취소 내역이 있는 경우 ReservePetsitterCard 컴포넌트 출력
      return (
        <>
          {data1.reservations_cancle === 'Y' && (
            <>
              <ReservePetsitterCard
                reservePetImgSrc={data1.petImgSrc}
                petInfo={`${data1.name}/${data1.breed}/${data1.sex === 'M' ? '남아' : '여아'}/${
                  new Date().getFullYear() - data1.birthYear
                }살/${data1.weight}kg`}
                state='취소완료'
              />
              <ReservePetsitterCard
                reservePetImgSrc={data2.petImgSrc}
                petInfo={`${data2.name}/${data2.breed}/${data2.sex === 'M' ? '남아' : '여아'}/${
                  new Date().getFullYear() - data2.birthYear
                }살/${data2.weight}kg`}
                state='취소완료'
              />
            </>
          )}
        </>
      );
    }
  };

  return (
    <>
      {/*<HeaderWithNav />*/}

      <div>
        <div className='mypage-bar' />
        <div className='mypage-bar-text'>예약내역</div>
      </div>

      <Link to='/reservepetsitter'>
        <button className='reservation-cancle-nav1'>펫시터</button>
      </Link>
      <Link to='/reservecancle'>
        <button className='reservation-cancle-nav2'>취소내역</button>
      </Link>
      <Link to='/reservereview'>
        <button className='reservation-cancle-nav3'>후기작성</button>
      </Link>

      <div className='mypage-navunderLine'></div>

      <div className='cancle-container'>{renderReservationCards()}</div>

      <Footer />
    </>
  );
};

export default ReservationCancle;
