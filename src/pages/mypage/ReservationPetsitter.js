import React, { useEffect, useState } from 'react';
import '../../styles/ReservaionPetsitter.css';
import NoContents from '../../components/NoContents';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import Footer from '../../components/Footer';
import MemberFormModal from '../../components/MemberFormModal';

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
          credentials: 'include',
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
    fetch(`/api/reserve/${memberId}`,{
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        const formData = res.data.map((info) => ({
          id: info.id,
          reservePetImgSrc: info.reservePetImgSrc,
          petInfo: `${info.name} / ${info.startDate} ~ ${info.endDate} / ${info.totalPrice}원`,
          status: info.state,
          membersId: info.membersId,
        }));

        setReservationCard(formData);
        //setCheckedReservations(Array(formData.length).fill(true));
        //setReservationStates(Array(formData.length).fill('승인대기'));
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleSupplyInfo = (index) => {
    const bookingId = reservationCard[index].id;

    // fetch(`/api/reserve/check/${bookingId}`)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (!Array.isArray(data)) {
    //       console.log(data);
    //
    //       throw new Error('Data is not in the expected format');
    //
    //     }
    //
    //     const formData = data.map((info) => ({
    //     id : info.bookingId,
    //     createDate : info.createDate,
    //     startDate : info.startDate,
    //     endDate : info.endDate,
    //     startTime : info.startTime,
    //     endTime : info.endTime,
    //     totalPrice : info.totalPrice,
    //       membersId: info.membersId,
    //     }));
    //     setModalMessage(formData);
    //     // 모달 열기 및 데이터 전달
    //     openModal();
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     // 오류 처리
    //   });
    // 첫 번째 요청: 현재 멤버의 예약 목록 가져오기
    fetch(`/api/reserve/${memberId}`,{
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // 두 번째 요청: 해당 예약의 상세 정보 가져오기
        fetch(`/api/reserve/check/${bookingId}`,{
          credentials: 'include',
        })
          .then((res2) => {
            if (!res2.ok) {
              throw new Error('Network response was not ok');
            }
            return res2.json();
          })
          .then((data) => {
            let dataArray = [];
            if (!Array.isArray(data)) {
              // 만약 데이터가 배열이 아니라면, 단일 객체로 처리
              dataArray.push({
                id: data.bookingId,
                createDate: data.createDate,
                startDate: data.startDate,
                endDate: data.endDate,
                startTime: data.startTime,
                endTime: data.endTime,
                totalPrice: data.totalPrice,
                membersId: data.membersId,
              });

              setModalMessage(dataArray);
              // 모달 열기 및 데이터 전달
              openModal();

              console.log("modalMessage: ", modalMessage);
            } else {
              // 만약 데이터가 배열이라면, 첫 번째 항목만 사용
              const info = data[0];
              const formData = {
                id: info.bookingId,
                createDate: info.createDate,
                startDate: info.startDate,
                endDate: info.endDate,
                startTime: info.startTime,
                endTime: info.endTime,
                totalPrice: info.totalPrice,
                membersId: info.membersId,
              };

              setModalMessage(JSON.stringify(formData));
              // 모달 열기 및 데이터 전달
              openModal();
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            // 오류 처리
          });
      })
      .catch((error) => {
        console.error('Error:', error);
        // 오류 처리
      });
  }

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
          {showModal && (
            <MemberFormModal
              title="예약 정보"
              text={
                <div>
                  {Array.isArray(modalMessage) && modalMessage.length > 0 ? (
                    modalMessage.map((info, index) => (
                      <div key={index}>
                        <div>
                          {info.startDate}<br />
                          {info.totalPrice}
                        </div>
                      </div>
                    ))
                  ) : '정보가 없습니다.'}
                </div>
              }
              onClose={closeModal}
            />
          )}

          <div className='reservation-components'>
            {reservationCard.length > 0 ? (
              reservationCard.map((card, index) => (
                <label key={index} className={`checked-width-${index + 1}`}
                       onDoubleClick={() => handleSupplyInfo(index)}>
                  <input
                    className='reservepet-checkbox'
                    type='checkbox'
                    checked={checkedReservations[index]}
                    onChange={() => handleCheckboxClick(index)}
                  />
                  <ReservePetsitterCard
                    reservePetImgSrc={card.reservePetImgSrc}
                    petInfo={card.petInfo}
                    state={card.status}
                    onClick={() => handleConfirmReservation(index)}
                    onDoubleClick={() => handleSupplyInfo(index)}
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
