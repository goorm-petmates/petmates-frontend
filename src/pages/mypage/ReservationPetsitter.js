import React, { useEffect, useState } from 'react';
import '../../styles/ReservaionPetsitter.css';
import NoContents from '../../components/NoContents';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import Footer from '../../components/Footer';

function ReservationPet() {
  const [checkedReservations, setCheckedReservations] = useState([false, false]);
  const [reservationStates, setReservationStates] = useState(['승인대기', '예약완료']);

  const handleCheckboxClick = (index) => {
    setCheckedReservations((prevChecked) => {
      const updatedChecked = [...prevChecked];
      updatedChecked[index] = !updatedChecked[index];
      return updatedChecked;
    });
  };

  const handleCancelReservation = () => {
    const today = new Date();

    const formettedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    checkedReservations.forEach((isChecked, index) => {
      const bookId = reservationCard[index].id;
      if (isChecked) {
        fetch(`https://petmates.co.kr/api/reserve/cancel`, {
          method: 'PUT',
          body : JSON.stringify({
            id: bookId,
            code: 1,
            canceledTime: formettedDate,
          })
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data);

            console.log(`예약이 취소되었습니다. Index: ${index}`, formettedDate);

            setReservationCard((prevCards) => {
              const updatedCards = [...prevCards];
              updatedCards[index] = {
                ...updatedCards[index],
                state: res.data.state
              };
              return updatedCards;
            });

            setCheckedReservations((prevChecked) => {
              const updatedChecked = [...prevChecked];
              updatedChecked[index] = false;
              return updatedChecked;
            });

          })
      }
    });
  };

  const handleConfirmReservation = (index) => {
    setReservationStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = '승인대기';
      return updatedStates;
    });
  };

  const [reservationCard, setReservationCard] = useState([]);
  const memberId = 1;

  useEffect(() => {
    fetch(`https://petmates.co.kr/api/reserve/${memberId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        const formData = res.data.map((info) => ({
          id: info.id,
          reservePetImgSrc: info.reservePetImgSrc,
          petInfo: `${info.name} / ${info.startDate} ~ ${info.endDate} / ${info.totalPrice}원`,
            state: info.state,
        }));

        setReservationCard(formData);
        //setCheckedReservations(Array(formData.length).fill(true));
        //setReservationStates(Array(formData.length).fill('승인대기'));
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    <div>
      {/*<HeaderWithNav />*/}

      <div>
        <div className='mypage-bar' />
        <div className='mypage-bar-text'>예약내역</div>
      </div>

      <Link to='/reservepetsitter'>
        <button className='reservation-pet-nav1'>펫시터</button>
      </Link>
      <Link to='/reservecancle'>
        <button className='reservation-pet-nav2'>취소내역</button>
      </Link>
      <Link to='/reservereview'>
        <button className='reservation-pet-nav3'>후기작성</button>
      </Link>

      <div className='mypage-navunderLine'></div>

      <div className="mypage-container">
        {/*<div className='reservation-container'>*/}
        {/*  <div className='reservation-components'>*/}
        {/*    {data1.reservations_status === 'Y' ? (*/}
        {/*      <>*/}
        {/*        <label className='checked-width-1'>*/}
        {/*          <input*/}
        {/*            className='reservepet-checkbox'*/}
        {/*            type='checkbox'*/}
        {/*            checked={checkedReservations[0]}*/}
        {/*            onChange={() => handleCheckboxClick(0)}*/}
        {/*          />*/}
        {/*          <ReservePetsitterCard*/}
        {/*            reservePetImgSrc='/imgs/pet_img_1.png'*/}
        {/*            petInfo='똑바로 / 2024.02.16 ~ 2024.02.16 / 16,500원'*/}
        {/*            state={reservationStates[0]}*/}
        {/*            onClick={() => handleConfirmReservation(0)}*/}
        {/*          />*/}
        {/*        </label>*/}
        {/*        <label className='checked-width-2'>*/}
        {/*          <input*/}
        {/*            className='reservepet-checkbox'*/}
        {/*            type='checkbox'*/}
        {/*            checked={checkedReservations[1]}*/}
        {/*            onChange={() => handleCheckboxClick(1)}*/}
        {/*          />*/}
        {/*          <ReservePetsitterCard*/}
        {/*            reservePetImgSrc='/imgs/dog3.jpeg'*/}
        {/*            petInfo='뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원'*/}
        {/*            state={reservationStates[1]}*/}
        {/*            onClick={() => handleConfirmReservation(1)}*/}
        {/*          />*/}
        {/*        </label>*/}
        {/*      </>*/}
        {/*    ) : (*/}
        {/*      <NoContents text='예약 내역이 없습니다.' />*/}
        {/*    )}*/}

        <button className='mypage-reservation-payment' onClick={handleCancelReservation}>
          예약취소
        </button>

        <div className='reservation-container'>
          <div className='reservation-components'>
            {reservationCard.length > 0 ? (
              reservationCard.map((card, index) => (
                <label key={index} className={`checked-width-${index + 1}`}>
                  <input
                    className='reservepet-checkbox'
                    type='checkbox'
                    checked={checkedReservations[index]}
                    onChange={() => handleCheckboxClick(index)}
                  />
                  <ReservePetsitterCard
                    reservePetImgSrc={card.reservePetImgSrc}
                    petInfo={card.petInfo}
                    state={card.state}
                    onClick={() => handleConfirmReservation(index)}
                  />
                </label>
              ))
            ) : (
              <NoContents text='예약 내역이 없습니다.' />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ReservationPet;
