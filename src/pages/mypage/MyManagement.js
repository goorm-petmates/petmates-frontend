import React, { useEffect, useState } from 'react';
import '../../styles/MyManagement.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import { useNavigate } from 'react-router-dom';
import NoContents from '../../components/NoContents';
const MyManagement = () => {
  const [checkedRefuse, setCheckedRefuse] = useState([false, false]);

  const handleCheckboxClick = (index) => {
    setCheckedRefuse((prevChecked) => {
      const updatedChecked = [...prevChecked];
      updatedChecked[index] = !updatedChecked[index];
      return updatedChecked;
    });
  };

  const handleCancelRefuse = () => {
    checkedRefuse.forEach((isChecked, index) => {
      if (isChecked) {
        const bookingId = reservationCard[index].id;
        fetch(`https://petmates.co.kr/api/my-page/petsitter/refuse/${bookingId}`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            id: bookingId,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(`거절이 완료되었습니다. Index: ${index}`);

            setReservationCard((prevCards) => {
              const updatedCards = [...prevCards];
              updatedCards[index] = {
                ...updatedCards[index],
                state: res.data.state,
              };
              return updatedCards;
            });

            setCheckedRefuse((prevChecked) => {
              const updatedChecked = [...prevChecked];
              updatedChecked[index] = false;
              return updatedChecked;
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => {
    setIsDeleted(true); // 삭제 버튼을 누르면 isDeleted 상태를 true로 변경
  };

  const handleConfirmReservation = (index) => {
    const bookingId = reservationCard[index].id;
    fetch(`https://petmates.co.kr/api/my-page/petsitter/approve/${bookingId}`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        id: bookingId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('요청을 승인했습니다.');

        setReservationCard((prevCards) => {
          const updatedCards = [...prevCards];
          updatedCards[index] = {
            ...updatedCards[index],
            state: res.data.state,
          };
          return updatedCards;
        });

        setCheckedRefuse((prevChecked) => {
          const updatedChecked = [...prevChecked];
          updatedChecked[index] = false;
          return updatedChecked;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [board, setBoard] = useState([]);
  const memberId = 1;
  const [isPetsitterExist, setIsPetsitterExist] = useState(true);

  const [reservationCard, setReservationCard] = useState([]);
  const petsitterId = 1;

  useEffect(() => {
    fetch(`https://petmates.co.kr/api/my-page/petsitter/existence/${memberId}`,{
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        if (res.exist === true) {
          const formData = res.data.map((info) => ({
            id: info.id,
            title: info.title,
            profilePath: info.profilePath,
            nickname: info.nickname,
          }));

          setBoard(formData);
        } else {
          setIsPetsitterExist(false);
        }
      });

    fetch(`https://petmates.co.kr/api/my-page/petsitter/reserve/${petsitterId}`,{
      credentials: 'include',
    })
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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {/*<HeaderWithNav />*/}

      <div>
        <div className='mypage-bar' />
        <div className='management-bar-text'>펫시터 관리</div>
      </div>

      <Link to='/mymanagement'>
        <button className='mymanagement-nav1'>예약요청</button>
      </Link>
      <Link to='/mymanagementcancle'>
        <button className='mymanagement-nav2'>취소내역</button>
      </Link>

      <div className='mypage-navunderLine'></div>

      <div className="mypage-management-container">
        {isPetsitterExist ? (
          <div className="management-container">
            {/*{isDeleted || petsitterForm === 'N' ? (*/}
            {/*  <div className='management-add-component'>*/}
            {/*    <span className='management-add-text'>*/}
            {/*      펫시터 지원 내역이 없습니다. 펫시터로 지원해보세요 :)*/}
            {/*    </span>*/}
            {/*    <button*/}
            {/*      className='management-add-button'*/}
            {/*      onClick={() => handleNavigate('/petsitterform')}*/}
            {/*    >*/}
            {/*      등록하기*/}
            {/*    </button>*/}
            {/*    <div className='management-add-bar'></div>*/}
            {/*  </div>*/}
            {/*) : null}*/}

            {/*{!isDeleted && petsitterForm === 'Y' && (*/}
            {/*  <div className='management-edit-component'>*/}
            {/*    <img*/}
            {/*      className='management-edit-img'*/}
            {/*      src='https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW58ZW58MHx8MHx8fDA%3D'*/}
            {/*      alt='프로필 사진'*/}
            {/*    />*/}
            {/*    <div className='management-text-row'>*/}
            {/*      <p className='management-edit-nickname'>{data1.nickname}</p>*/}
            {/*      <p className='management-edit-text'>*/}
            {/*        돌봄 경험 2년 있으며 펫시터 자격증 보유하였습니다.*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*    <div className='management-buttons'>*/}
            {/*      <button*/}
            {/*        className='management-edit-button'*/}
            {/*        onClick={() => handleNavigate('/testpetsitterform')}*/}
            {/*      >*/}
            {/*        수정하기*/}
            {/*      </button>*/}
            {/*      <button className='management-delete-button' onClick={handleDelete}>*/}
            {/*        삭제하기*/}
            {/*      </button>*/}
            {/*    </div>*/}
            {/*    <div className='management-bar'></div>*/}
            {/*  </div>*/}
            {/*)}*/}

            {/*<div className='management-refuse-container'>*/}
            {/*  <button className='management-refuse-button' onClick={handleCancelRefuse}>*/}
            {/*    거절하기*/}
            {/*  </button>*/}
            {/*  <label className='checked-width-1'>*/}
            {/*    <input*/}
            {/*      className='refuse-checkbox'*/}
            {/*      type='checkbox'*/}
            {/*      checked={checkedRefuse[0]}*/}
            {/*      onChange={() => handleCheckboxClick(0)}*/}
            {/*    />*/}
            {/*    <ReservePetsitterCard*/}
            {/*      reservePetImgSrc='/imgs/pet_img_1.png'*/}
            {/*      petInfo='똑바로 / 2024.02.16 ~ 2024.02.16 / 16,500원'*/}
            {/*      state={managementStates[0]}*/}
            {/*      onClick={() => handleConfirmReservation(0)}*/}
            {/*    />*/}
            {/*  </label>*/}
            {/*  <label className='checked-width-2'>*/}
            {/*    <input*/}
            {/*      className='refuse-checkbox'*/}
            {/*      type='checkbox'*/}
            {/*      checked={checkedRefuse[1]}*/}
            {/*      onChange={() => handleCheckboxClick(1)}*/}
            {/*    />*/}
            {/*    <ReservePetsitterCard*/}
            {/*      reservePetImgSrc='/imgs/dog3.jpeg'*/}
            {/*      petInfo='뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원'*/}
            {/*      state={managementStates[1]}*/}
            {/*    />*/}
            {/*  </label>*/}
            {/*</div>*/}

            {/*{isDeleted || petsitterForm === 'N' ? (*/}
            {/*  <div className='management-add-component'>*/}
            {/*    <span className='management-add-text'>*/}
            {/*      펫시터 지원 내역이 없습니다. 펫시터로 지원해보세요 :)*/}
            {/*    </span>*/}
            {/*    <button*/}
            {/*      className='management-add-button'*/}
            {/*      onClick={() => handleNavigate('/petsitterform')}*/}
            {/*    >*/}
            {/*      등록하기*/}
            {/*    </button>*/}
            {/*    <div className='management-add-bar'></div>*/}
            {/*  </div>*/}
            {/*) : null}*/}

            {board.map((info, index) => (
              <div className="management-edit-component" key={index}>
                <img className="management-edit-img" src={info.profilePath} alt="프로필 사진" />
                <div className="management-text-row">
                  <p className="management-edit-nickname">{info.nickname}</p>
                  <p className="management-edit-text">{info.title}</p>
                </div>
                <div className="management-buttons">
                  <button
                    className="management-edit-button"
                    onClick={() => handleNavigate('/petsitterform')}
                  >
                    수정하기
                  </button>
                  <button className="management-delete-button" onClick={handleDelete}>
                    삭제하기
                  </button>
                </div>
                <div className="management-bar"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="management-add-container">
            <div className="management-add-component">
          <span className="management-add-text">
            펫시터 지원 내역이 없습니다. 펫시터로 지원해보세요 :)
          </span>
              <button
                className="management-add-button"
                onClick={() => handleNavigate('/petsitterform')}
              >
                등록하기
              </button>
              <div className="management-add-bar"></div>
            </div>
          </div>
        )}

        <div className="management-refuse-container">
          <button className="management-refuse-button" onClick={handleCancelRefuse}>
            거절하기
          </button>
          {reservationCard.length > 0 ? (
            reservationCard.map((card, index) => (
              <label key={index} className={`checked-width-${index + 1}`}>
                <input
                  className='reservepet-checkbox'
                  type='checkbox'
                  checked={checkedRefuse[index]}
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

        <div className='page-buttons'>
          {/*<button className='page-button'>1</button>*/}
          {/*<button className='page-button'>2</button>*/}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyManagement;
