import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import PetSitterInfoReview from '../../components/PetSitterInfoReview.js';
import Footer from '../../components/Footer.js';
import '../../styles/StylePetSitterInfo.css';

const PetSitterInfo = () => {
  /*datepicker 사용*/
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');

  const generateTimeOptions = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      times.push(`${i.toString().padStart(2, '0')}:00`);
      times.push(`${i.toString().padStart(2, '0')}:30`);
    }
    return times;
  };

  const handleReservationSubmit = (event) => {
    event.preventDefault();
    // Process your reservation data here
    console.log('예약완료 날짜:', { startDate, endDate, startTime, endTime });
  };

  /*반려견 체크박스 사용*/
  const [checkedState, setCheckedState] = useState({
    dog1: false,
    dog2: false,
    dog3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedState({ ...checkedState, [name]: checked });
    console.log({ name, checked });
  };

  return (
    <>
      <HeaderWithNav></HeaderWithNav>
      <div className='petsitter-info-post'>
        <div className='petsitter-left-side'>
          {/********** left-side ************/}
          <div className='petsitter-user-info'>
            <img
              className='petsitter-profile-pic-small'
              src='https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxMjE3NHw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
              alt='petsitter profile pic'
            ></img>
            <div className='petsitter-text-info'>
              <span className='petsitter-title'>
                돌봄 경험 2년 있으며 펫시터 자격증 보유하였습니다.
              </span>
              <div className='petsitter-nicknames-and-address'>
                <span className='petsitter-nickname'>닉네임</span>
                <span className='petsitter-address'>도로명주소</span>
              </div>
              <div className='petsitter-order-date-and-view'>
                <span className='petsitter-order-by-date'> 작성일: yyyy.mm.dd</span>
                <span className='view-count'>조회: 10</span>
              </div>
            </div>
          </div>

          <img
            className='petsitter-profile-pic-large'
            src='https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxMjE3NHw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
            alt='petsitter profile pic1'
          ></img>
          <span className='petsitter-extra-pics'>
            <img src='/imgs/Logo-Icon.png' alt='petsitter profile pic2'></img>
            <img src='/imgs/Logo-Icon.png' alt='petsitter profile pic3'></img>
            <img src='/imgs/Logo-Icon.png' alt='petsitter profile pic4'></img>
            <img src='/imgs/Logo-Icon.png' alt='petsitter profile pic5'></img>
          </span>

          <div className='self-introduction'>
            <div className='self-introduction-head'>펫시터 소개 및 이용 규칙</div>
            <p>
              펫시터 내용 부분
              <br />
              1. 경력 사항 <br />
              2. 자기소개 <br />
              3. 돌봄공간 : ex) 아파트 <br />
              4. 산책 가능여부: ex) 가능 <br />
              5. 예약관련 내용: <br />
              6. 최대 돌봄가능 마리수: ex)2마리 <br />
              7. 동거 반려동물: ex)없음 <br />
              8. 노령견 가능 여부(나이 포함): ex) 노령견 12살 까지만 가능
            </p>
          </div>

          <div className='petsitter-location'>펫시터위치</div>
          <div className='kakao-map'>카카오맵</div>

          <div className='petsitter-review'>
            <span>리뷰 (3)</span>
            <span>⭐️⭐️⭐️⭐️</span>
          </div>
          <PetSitterInfoReview></PetSitterInfoReview>
          <PetSitterInfoReview></PetSitterInfoReview>
          <PetSitterInfoReview></PetSitterInfoReview>
        </div>

        {/********** right-side ************/}
        <div className='petsitter-right-side'>
          <div className='price-table'>
            <div className='price-table-header'>이용 금액</div>
            <div className='price-table-min-hrs'> *최소 3시간이상부터 예약가능합니다</div>
            <table>
              <thead>
                <tr>
                  <th>
                    데이케어
                    <br />
                    <span style={{ fontWeight: '370' }}>(3시간)</span>
                  </th>
                  <th>
                    추가이용 <br />
                    <span style={{ fontWeight: '370' }}>(30분)</span>
                  </th>
                  <th>
                    1박케어 <br />
                    <span style={{ fontWeight: '370' }}>(24hr)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30,000</td>
                  <td>5,000</td>
                  <td>40,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='petsitter-booking-box'>
            <div className='booking-box-header'>맡길 반려견 선택</div>
            {/**************반려동물 등록되지않은 유저인경우 활성화************/}
            {/* <button className='register-pet-btn'>
              <Link to='/petInfo'>반려동물을 먼저 등록하세요.</Link>
            </button> */}

            {/**************반려동물 등록된 유저인경우 스타일 활성화***********/}
            <div className='dog-checkbox'>
              <label htmlFor='dog1'>
                <img
                  className='registered-dog-pic1'
                  src='/imgs/Logo-Icon.png'
                  alt='petowner registered dog pic1'
                ></img>
                <input
                  type='checkbox'
                  name='dog1'
                  id='dog1'
                  checked={checkedState.dog1}
                  onChange={handleCheckboxChange}
                />
                1번 반려견
              </label>
              <label htmlFor='dog2'>
                <img
                  className='registered-dog-pic2'
                  src='/imgs/Logo-Icon.png'
                  alt='petowner registered dog pic2'
                ></img>
                <input
                  type='checkbox'
                  name='dog2'
                  id='dog2'
                  checked={checkedState.dog2}
                  onChange={handleCheckboxChange}
                />
                2번 반려견
              </label>
              <label htmlFor='dog3'>
                <img
                  className='registered-dog-pic3'
                  src='/imgs/Logo-Icon.png'
                  alt='petowner registered dog pic3'
                ></img>
                <input
                  type='checkbox'
                  name='dog3'
                  id='dog3'
                  checked={checkedState.dog3}
                  onChange={handleCheckboxChange}
                />
                3번 반려견
              </label>
            </div>
            {/*****************************************/}

            <div className='date-picker-header'>예약을 원하는 날짜와 시간을 선택하세요</div>
            <form className='date-picker' onSubmit={handleReservationSubmit}>
              <div className='start-date'>
                <label htmlFor='start-date'>시작날짜 : </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat='yyyy/MM/dd'
                />
              </div>
              <div className='end-date'>
                <label htmlFor='end-date'>종료날짜 : </label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat='yyyy/MM/dd'
                />
              </div>
              <div className='start-time'>
                <label htmlFor='start-time'>맡기는 시간 : </label>
                <select value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                  {generateTimeOptions().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div className='end-time'>
                <label htmlFor='end-time'>데려가는 시간 : </label>
                <select value={endTime} onChange={(e) => setEndTime(e.target.value)}>
                  {generateTimeOptions().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className='booking-price-calc'>
                <div className='booking-item-price'>
                  <div>데이케어: 0원</div>
                  <div>추가이용: 0원</div>
                  <div>1박케어: 0원</div>
                  <div>부가세: 0원</div>
                </div>
                <div className='total-price'>총 이용금액: 0원</div>
                <button className='booking-btn' type='submit'>
                  예약 요청
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PetSitterInfo;
