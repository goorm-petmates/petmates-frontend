import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import PetSitterInfoReview from '../../components/PetSitterInfoReview.js';
import Footer from '../../components/Footer.js';
import '../../styles/StylePetSitterInfo.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
// import PetSittersData from './PetSittersData.js';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PetSitterInfo = () => {
  /*datepicker 사용 로직*/
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [costs, setCosts] = useState({
    daycare: 0,
    additional: 0,
    overnight: 0,
    total: 0,
  });

  // 펫시터 목서버 데이터 받아오기
  // 한페이지에 1개의 api만 들고올때
  // const [petSitterInfo, setPetSitterInfo] = useState({});
  // 한페이지에 2개의 api들고올때 - 그룹화해서 들고오기
  const [petSitterInfo, setPetSitterInfo] = useState({ info: {}, reviews: [] });

  let { id } = useParams(); // URL에서 id 값을 추출
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPetSitterInfo = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/petsitter/posting/${id}`);
        if (response.data && response.data.data && response.data.data.length > 0) {
          const info = response.data.data.find(
            (item) => parseInt(item.id, 10) === parseInt(id, 10),
          );
          if (info) {
            //(한페이지에 한개의 api만들고올때) 이부분의 코드만 변경됨
            setPetSitterInfo((prevState) => ({ ...prevState, info }));
            // setPetSitterInfo(info);
          } else {
            console.error('Pet sitter not found');
          }
        }
      } catch (error) {
        console.error('Failed to fetch pet sitter info:', error);
      }
    };

    if (id) {
      fetchPetSitterInfo();
    }
  }, [id]);

  // 하드코딩 더미데이터 들고올때
  // useEffect(() => {
  //   // 문자열로 받아진 id를 숫자로 변환 (PetSittersData의 id가 숫자형태인 경우)
  //   const petSitterId = parseInt(id, 10);
  //   const petSitterData = PetSittersData.find((petSitter) => petSitter.id === petSitterId);

  //   if (petSitterData) {
  //     setPetSitterInfo(petSitterData); // 찾은 데이터를 상태로 설정
  //   } else {
  //     // 찾지 못한 경우에 대한 처리
  //     console.log('Pet sitter not found or invalid ID');
  //   }
  // }, [id]); // id 값이 변경될 때마다 실행
  ///////////////////////////////////////

  //(한페이지에 두개 api 들고올때) 펫시터 목서버 리뷰댓글 데이터 불러오기
  useEffect(() => {
    const fetchPetSitterReviews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/petsitter/reviews`, {
          params: { petsitterId: id },
        });

        if (response.data && response.data.data) {
          //(한페이지에 한개의 api만들고올때) 이부분의 코드만 변경됨
          setPetSitterInfo((prevState) => ({ ...prevState, reviews: response.data.data }));
          // setPetSitterInfo({
          //   ...petSitterInfo,
          //   reviews: response.data.data,
          // });
        }
      } catch (error) {
        console.error('Failed to fetch pet sitter reviews:', error);
      }
    };

    if (id) {
      fetchPetSitterReviews();
    }
  }, [id]);

  const generateTimeOptions = () => {
    const times = [];
    for (let i = 9; i < 22; i++) {
      //9시부터 22시까지 dropdown 선택
      times.push(`${i.toString().padStart(2, '0')}:00`);
      times.push(`${i.toString().padStart(2, '0')}:30`);
    }
    times.push(`22:00`);
    return times;
  };

  //반려동물 정보체크(jwt토큰 여부로 구분)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //jwt토큰사용시 주석해제
  useEffect(() => {
    // 여기서 JWT 토큰의 유무를 체크하는 로직을 추가하기
    // 예시로 localStorage에서 토큰을 확인하는 방법을 사용
    const token = localStorage.getItem('jwtToken'); //'jwtToken을 실제토큰으로 변경'
    setIsLoggedIn(!!token);
  }, []);

  //반려견 체크박스 관련 로직//
  const [checkedState, setCheckedState] = useState({
    dog1: false,
    dog2: false,
    dog3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name } = event.target;

    //상태 리셋시켜 클릭된 체크박스만 true가 되게함
    setCheckedState({
      dog1: false,
      dog2: false,
      dog3: false,
      [name]: true,
    });
  };

  useEffect(() => {
    calculateCosts();
  }, [startDate, endDate, startTime, endTime, petSitterInfo]);

  const calculateCosts = () => {
    // petSitterInfo 상태에서 가격 정보를 가각 직접 받아와서 계산되도록 실행
    // 데이터파일에서 문자열로 된 가격 정보에서 쉼표를 제거하고 숫자형으로 변환하고, 값이 없는 경우 기본값을 0으로 설정
    const standardPrice = parseInt(petSitterInfo.info.standardPrice?.replace(/,/g, '') || '0', 10);
    const addPrice = parseInt(petSitterInfo.info.addPrice?.replace(/,/g, '') || '0', 10);
    const nightPrice = parseInt(petSitterInfo.info.nightPrice?.replace(/,/g, '') || '0', 10);

    // 날짜와 시간이 제대로 선택되었는지 확인
    // replace메서드를 호출하기전에 petSitterInfo 객체의 각 속성이 존재하는지 먼저 확인해서 undefined or null값받지않게하기
    if (!startDate || !endDate || !startTime || !endTime) {
      console.log('날짜 또는 시간이 올바르게 설정되지 않았습니다.');
      return; // 날짜나 시간이 올바르게 설정되지 않았으면 계산 중단
    }

    const rates = {
      daycare: standardPrice, // 6 hours
      additional: addPrice, // every 30 minutes
      overnight: nightPrice, // 24 hours
    };

    const startDateTime = new Date(startDate);
    startDateTime.setHours(parseInt(startTime.split(':')[0]), parseInt(startTime.split(':')[1]), 0);
    const endDateTime = new Date(endDate);
    endDateTime.setHours(parseInt(endTime.split(':')[0]), parseInt(endTime.split(':')[1]), 0);

    const diffInMs = endDateTime - startDateTime;
    const diffInHours = diffInMs / (1000 * 60 * 60); //두 시간 사이 차이를 밀리초 단위로 계산후 시간단위로 변환

    let daycareCost = 0,
      additionalCost = 0,
      overnightCost = 0;

    if (diffInHours <= 6) {
      daycareCost = rates.daycare;
    } else if (diffInHours < 24) {
      // For less than 24 hours but more than 6 hours
      daycareCost = rates.daycare; // Apply daycare cost for the first 6 hours
      const additionalHours = diffInHours - 6;
      if (additionalHours > 0) {
        const additionalBlocks = Math.ceil(additionalHours / 0.5);
        additionalCost = additionalBlocks * rates.additional;
      }
    } else {
      // For 24 hours or more, only apply overnight cost
      const full24HourBlocks = Math.floor(diffInHours / 24);
      overnightCost = (full24HourBlocks + 1) * rates.overnight; // Include any part of a day as an additional block
      // Reset daycare and additional costs as overnight is applied
      daycareCost = 0;
      additionalCost = 0;
    }

    const total = daycareCost + additionalCost + overnightCost;
    setCosts({
      daycare: daycareCost,
      additional: additionalCost,
      overnight: overnightCost,
      total,
    });
  };

  //금액 숫자 포맷팅
  const formatNumber = (number) => {
    return new Intl.NumberFormat('ko-KR').format(number);
  };

  // 반려견 선택 여부 확인
  const isDogSelected = checkedState.dog1 || checkedState.dog2 || checkedState.dog3;

  // 날짜와 시간이 모두 선택되었는지 확인
  const isDateTimeSelected = startDate && endDate && startTime !== '' && endTime !== '';

  const handleReservationButtonClick = (event) => {
    event.preventDefault(); // 폼 제출 방지

    // 조건 검사: 반려견 선택, 날짜 및 시간 선택
    if (!isDogSelected || !isDateTimeSelected) {
      alert('모든 조건(반려견, 날짜, 시간)을 선택해야 예약이 가능합니다.');
    } else {
      // 조건이 충족되면 예약 처리 로직 실행
      alert('예약이 요청되었습니다. 예약 페이지로 이동합니다.');

      // 선택된 반려견 식별
      const selectedDogs = Object.entries(checkedState)
        .filter(([key, value]) => value)
        .map(([key]) => key);

      // 예약 정보 확인
      console.log('예약정보:', { startDate, endDate, startTime, endTime, selectedDogs });

      navigate('/reservepetsitter');
    }
  };

  return (
    <>
      <div className='petsitter-info-post'>
        <div className='petsitter-left-side'>
          {/********** left-side ************/}
          <div className='petsitter-user-info'>
            <img
              className='petsitter-profile-pic-small'
              src={
                petSitterInfo.info.profilePic1
                  ? petSitterInfo.info.profilePic1
                  : '/imgs/Logo-Icon.png'
              }
              alt='petsitter profile pic'
            ></img>
            <div className='petsitter-text-info'>
              {/* 한개의 api만 들고올때 */}
              {/* <span className='petsitter-title'>{petSitterInfo.title}</span> */}
              <span className='petsitter-title'>{petSitterInfo.info.title}</span>

              <div className='petsitter-nicknames-and-address'>
                <span className='petsitter-nickname'> {petSitterInfo.info.nickname}</span>
                <span className='petsitter-address'>
                  {petSitterInfo.info.serviceArea1} {petSitterInfo.info.serviceArea2}
                </span>
              </div>
              <div className='petsitter-order-date-and-view'>
                <span className='petsitter-order-by-date'>
                  작성일: {petSitterInfo.info.createAt}
                </span>
                <span className='view-count'> 조회: {petSitterInfo.info.viewCnt}</span>
              </div>
            </div>
          </div>
          <img
            className='petsitter-profile-pic-large'
            src={
              petSitterInfo.info.profilePic1
                ? petSitterInfo.info.profilePic1
                : '/imgs/Logo-Icon.png'
            }
            alt='petsitter profile pic1'
          ></img>
          <span className='petsitter-extra-pics'>
            <img
              src={
                petSitterInfo.info.profilePic2
                  ? petSitterInfo.info.profilePic2
                  : '/imgs/Logo-Icon.png'
              }
              alt='petsitter profile pic2'
            ></img>
            <img
              src={
                petSitterInfo.info.profilePic3
                  ? petSitterInfo.info.profilePic3
                  : '/imgs/Logo-Icon.png'
              }
              alt='petsitter profile pic3'
            ></img>
            <img
              src={
                petSitterInfo.info.profilePic4
                  ? petSitterInfo.info.profilePic4
                  : '/imgs/Logo-Icon.png'
              }
              alt='petsitter profile pic4'
            ></img>
            <img
              src={
                petSitterInfo.info.profilePic5
                  ? petSitterInfo.info.profilePic5
                  : '/imgs/Logo-Icon.png'
              }
              alt='petsitter profile pic5'
            ></img>
          </span>
          <div className='self-introduction'>
            <div className='self-introduction-head'>펫시터 소개 내용</div>
            <p>
              {/* 1. 경력 사항 <br />
              2. 자기소개 <br />
              3. 돌봄공간 : ex) 아파트 <br />
              4. 산책 가능여부: ex) 가능 <br />
              5. 예약관련 내용: <br />
              6. 최대 돌봄가능 마리수: ex)2마리 <br />
              7. 동거 반려동물: ex)없음 <br />
              8. 노령견 가능 여부(나이 포함): ex) 노령견 12살 까지만 가능 */}
              {petSitterInfo.info.contents}
            </p>
          </div>
          <div className='petsitter-location'>펫시터위치</div>
          <div className='kakao-map'>
            {petSitterInfo.info.latitude && petSitterInfo.info.longitude && (
              <Map
                center={{
                  lat: petSitterInfo.info.latitude,
                  lng: petSitterInfo.info.longitude,
                }}
                style={{ width: '100%', height: '280px' }}
                level={3}
              >
                <MapMarker
                  position={{
                    lat: petSitterInfo.info.latitude,
                    lng: petSitterInfo.info.longitude,
                  }}
                ></MapMarker>
              </Map>
            )}
          </div>
          <div className='petsitter-review'>
            <span>리뷰 ( {petSitterInfo.info.reviewCnt}개 )</span>
            <span className='petsitter-rating'>
              {/* petSitterInfo.info.averageRating를 배열로받아야 에러가안생김 */}
              {[...Array(Math.round([petSitterInfo.info.averageRating]))].map((_, index) => (
                <span key={index} className='star filled' style={{ color: 'gold' }}>
                  ★
                </span>
              ))}
            </span>
            {/* 별점에 빈칸으로 구현 */}
            {/* <span className='petsitter-rating'>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className='star filled'
                  style={{
                    color: index < Math.round(petSitterInfo.info.averageRating) ? 'gold' : 'grey',
                  }}
                >
                  ★
                </span>
              ))}
            </span> */}
          </div>

          {/* 리뷰 개수만큼 컴포넌트 생성 */}
          {/* ---1개의 api만 불러올때 */}
          {/* {petSitterInfo.reviews &&
            petSitterInfo.reviews.map((review, index) => (
              <PetSitterInfoReview key={index} {...review} />
            ))} */}
          {/* 2개의 api불러올떄 */}
          {petSitterInfo.reviews.map((review, index) => (
            <PetSitterInfoReview key={index} {...review} />
          ))}
          {/* 하드코딩 - 리뷰 개수만큼 컴포넌트 생성 */}
          {/* {petSitterInfo.reviews &&
            petSitterInfo.reviews.map((review) => (
              <PetSitterInfoReview
                key={review.id}
                reviewCnt={review.reviewCnt}
                reviewAvgRating={review.reviewAvgRating}
                reviewPic={review.reviewPic}
                reviewNickname={review.reviewNickname}
                reviewCreateAt={review.reviewCreateAt}
                reviewContents={review.reviewContents}
                reviewRating={review.reviewRating}
              />
            ))} */}
        </div>

        {/********** right-side ************/}
        <div className='petsitter-right-side'>
          <div className='price-table'>
            <div className='price-table-header'>이용 금액</div>
            <div className='price-table-min-hrs'> *최소 6시간이상부터 예약가능합니다</div>
            <table>
              <thead>
                <tr>
                  <th>
                    데이케어
                    <br />
                    <span style={{ fontWeight: '370' }}>(6시간)</span>
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
                  <td>{petSitterInfo.info.standardPrice}</td>
                  <td>{petSitterInfo.info.addPrice}</td>
                  <td>{petSitterInfo.info.nightPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='petsitter-booking-box'>
            <div className='booking-box-header'>맡길 반려견 선택</div>
            {/**************반려동물 등록되지않은 유저인경우 활성화************/}
            {!isLoggedIn && (
              <button className='register-pet-btn'>
                <Link to='/petInfo'>반려동물을 먼저 등록하세요.</Link>
              </button>
            )}

            {/**************반려동물 등록된 유저인경우 활성화***********/}
            {isLoggedIn && (
              <div className='dog-checkbox'>
                <label htmlFor='dog1'>
                  <img
                    className='registered-dog-pic1'
                    src='/imgs/pet_img_1.png'
                    alt='petowner registered dog pic1'
                  ></img>
                  <input
                    type='checkbox'
                    name='dog1'
                    id='dog1'
                    checked={checkedState.dog1}
                    onChange={handleCheckboxChange}
                  />
                  1번 똑바로
                </label>
                <label htmlFor='dog2'>
                  <img
                    className='registered-dog-pic2'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPQQJdPQ3F19ICZpY78APxYenUsW9tVn9hdMwrlCWwnxMgQ0HFqE8MP9pODtMCpiaqnw&usqp=CAU'
                    alt='petowner registered dog pic2'
                  ></img>
                  <input
                    type='checkbox'
                    name='dog2'
                    id='dog2'
                    checked={checkedState.dog2}
                    onChange={handleCheckboxChange}
                  />
                  2번 초키
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
            )}

            <div className='date-picker-header'>예약을 원하는 날짜와 시간을 선택하세요</div>
            <form className='date-picker'>
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
                  <option value=''>시간 선택</option>
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
                  <option value=''>시간 선택</option>
                  {generateTimeOptions().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className='booking-price-calc'>
                <div className='booking-item-price'>
                  <div>
                    데이케어:
                    <span className='cost-placeholder'>
                      {isDateTimeSelected ? `${formatNumber(costs.daycare)}원` : '0원'}
                    </span>
                  </div>
                  <div>
                    추가이용:
                    <span className='cost-placeholder'>
                      {isDateTimeSelected ? `${formatNumber(costs.additional)}원` : '0원'}
                    </span>
                  </div>
                  <div>
                    1박케어:
                    <span className='cost-placeholder'>
                      {isDateTimeSelected ? `${formatNumber(costs.overnight)}원` : '0원'}
                    </span>
                  </div>
                  <div>
                    부가세:
                    <span className='cost-placeholder'>
                      {isDateTimeSelected
                        ? `${formatNumber(Math.round(costs.total * 0.1))}원`
                        : '0원'}
                    </span>
                  </div>
                </div>
                <div className='total-price'>
                  총 이용금액 :
                  {isDateTimeSelected
                    ? `${formatNumber(costs.total + Math.round(costs.total * 0.1))}원`
                    : '선택해주세요'}
                </div>
                <button
                  className='booking-btn'
                  type='submit'
                  onClick={handleReservationButtonClick}
                >
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
