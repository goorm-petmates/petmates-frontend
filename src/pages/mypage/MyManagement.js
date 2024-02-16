import React, { useState } from 'react';
import '../../styles/MyManagement.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import { useNavigate } from 'react-router-dom';
import { data1 } from '../Data';
const MyManagement = () => {
  const [checkedRefuse, setCheckedRefuse] = useState([false, false]);
  const [managementStates, setManagementStates] = useState(['예약승인', '예약완료']);

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
        console.log(`거절이 완료되었습니다. Index: ${index}`);

        setManagementStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = '취소완료';
          return updatedStates;
        });
      }
    });
  };

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const { petsitterForm } = data1;

  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => {
    setIsDeleted(true); // 삭제 버튼을 누르면 isDeleted 상태를 true로 변경
  };

  const handleConfirmReservation = (index) => {
    setManagementStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = '예약완료';
      return updatedStates;
    });
  };

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

      <div className='management-container'>
        {isDeleted || petsitterForm === 'N' ? (
          <div className='management-add-component'>
            <span className='management-add-text'>
              펫시터 지원 내역이 없습니다. 펫시터로 지원해보세요 :)
            </span>
            <button
              className='management-add-button'
              onClick={() => handleNavigate('/petsitterform')}
            >
              등록하기
            </button>
            <div className='management-add-bar'></div>
          </div>
        ) : null}

        {!isDeleted && petsitterForm === 'Y' && (
          <div className='management-edit-component'>
            <img
              className='management-edit-img'
              src='https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW58ZW58MHx8MHx8fDA%3D'
              alt='프로필 사진'
            />
            <div className='management-text-row'>
              <p className='management-edit-nickname'>{data1.nickname}</p>
              <p className='management-edit-text'>
                돌봄 경험 2년 있으며 펫시터 자격증 보유하였습니다.
              </p>
            </div>
            <div className='management-buttons'>
              <button
                className='management-edit-button'
                onClick={() => handleNavigate('/testpetsitterform')}
              >
                수정하기
              </button>
              <button className='management-delete-button' onClick={handleDelete}>
                삭제하기
              </button>
            </div>
            <div className='management-bar'></div>
          </div>
        )}
        <div className='management-refuse-container'>
          <button className='management-refuse-button' onClick={handleCancelRefuse}>
            거절하기
          </button>
          <label className='checked-width-1'>
            <input
              className='refuse-checkbox'
              type='checkbox'
              checked={checkedRefuse[0]}
              onChange={() => handleCheckboxClick(0)}
            />
            <ReservePetsitterCard
              reservePetImgSrc='/imgs/dog3.jpeg'
              petInfo='똑바로 / 2023.12.23 ~ 2023.12.24 / 50,000원'
              state={managementStates[0]}
              onClick={() => handleConfirmReservation(0)}
            />
          </label>
          <label className='checked-width-2'>
            <input
              className='refuse-checkbox'
              type='checkbox'
              checked={checkedRefuse[1]}
              onChange={() => handleCheckboxClick(1)}
            />
            <ReservePetsitterCard
              reservePetImgSrc='/imgs/dog3.jpeg'
              petInfo='뭉치 / 2024.01.11 16시 ~ 19시 / 20,000원'
              state={managementStates[1]}
            />
          </label>
        </div>
      </div>

      <div className='page-buttons'>
        <button className='page-button'>1</button>
        <button className='page-button'>2</button>
      </div>
      <Footer />
    </>
  );
};

export default MyManagement;
