import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer';
import PetSitterList from '../../components/PetSitterList.js';
import PetSitterRightBtns from '../../components/PetSitterRightBtns.js';
import '../../styles/StylePetSitter.css';

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PetSitter = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [careType, setCareType] = useState('');
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  //펫시터 리스트 공동컴포넌트 상태관리
  const [petSittersList, setPetSittersList] = useState([]); // 펫시터 default 리스트

  // 현재 페이지 번호와 페이지 데이터를 상태로 관리
  const [totalPetSitters, setTotalPetSitters] = useState(0); // 전체 펫시터 수
  const [petSittersPerPage, setPetSittersPerPage] = useState(0); // 페이지 당 펫시터 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  // 페이지 번호 계산 로직 (전체 펫시터 수(totalPetSitters)와 페이지 당 표시할 펫시터 수(petSittersPerPage)에 기반하여 계산)
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPetSitters / petSittersPerPage); i++) {
    pageNumbers.push(i);
  }

  //페이지네이션 상태관리
  const query = useQuery();
  // const currentPage = parseInt(query.get('page')) || 1;

  useEffect(() => {
    fetchPetSitters(currentPage, careType, selectedRegion, selectedDistrict);
  }, [currentPage, careType, selectedRegion, selectedDistrict]);

  // 서울시의 구 목록
  // prettier-ignore
  const seoulDistricts = [
    '강남구', '강동구', '강서구', '강북구', '관악구',
    '광진구', '구로구', '금천구', '노원구', '동대문구',
    '도봉구', '동작구', '마포구', '서대문구', '성동구',
    '성북구', '서초구', '송파구', '영등포구', '용산구',
    '양천구', '은평구', '종로구', '중구', '중랑구',
  ];

  // 경기도의 시 목록
  // prettier-ignore
  // const gyeonggiCities = [
  //   '가평군', '고양시', '과천시', '광명시', '광주시',
  //   '구리시', '군포시', '김포시', '남양주시', '동두천시',
  //   '부천시', '성남시', '수원시', '시흥시', '안산시',
  //   '안성시', '안양시', '양주시', '양평군', '여주시',
  //   '연천군', '오산시', '용인시', '의왕시', '의정부시',
  //   '이천시', '파주시', '평택시', '포천시', '하남시',
  //   '화성시',
  // ];

  useEffect(() => {
    if (selectedRegion === '서울시') {
      setDistrictOptions(seoulDistricts);
    }
    // else if (selectedRegion === 'gyeonggi') {
    //   setDistrictOptions(gyeonggiCities);
    // }
  }, [selectedRegion]);

  useEffect(() => {
    // Initial fetch with no filters
    fetchPetSitters();
  }, []); //빈 배열을 사용해서 최초에 한번만 실행되게하기

  // const fetchPetSitters = async () => {
  //   const url = `${BASE_URL}/api/petsitter/list`; // Endpoint intercepted by MSW

  //   try {
  //     const response = await axios.get(url);
  //     if (response.status === 200 && response.data.data) {
  //       //응답이 성공적이고(response.status === 200), 응답 데이터(response.data.data)가 존재할 경우,
  //       setFullPetSittersList(response.data.data); // 전체 펫시터 리스트를 저장하고
  //       setPetSittersList(response.data.data); // 초기화면에 펫시터 리스트를 표시해줌
  //     } else {
  //       console.error('API 호출 실패:', response);
  //     }
  //   } catch (error) {
  //     console.error('API 호출 중 오류 발생:', error);
  //   }
  // };

  const fetchPetSitters = async (page, careType, region, district) => {
    const url = `${BASE_URL}/api/petsitter/list?page=${page}&careType=${careType}&region=${region}&district=${district}`;

    try {
      const response = await axios.get(url);
      if (response.status === 200 && response.data.data) {
        setPetSittersList(response.data.data); // 펫시터 목록 데이터 업데이트
        setTotalPetSitters(response.data.totalContents); // 전체 펫시터 수 업데이트
        setPetSittersPerPage(response.data.pageTotalCnt); // 페이지 당 펫시터 수 업데이트
        setCurrentPage(response.data.pageNum); // 현재 페이지 번호 업데이트
      } else {
        console.error('API 호출 실패:', response);
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('선택된 서비스: ', careType);
    console.log('선택된 시: ', selectedRegion);
    console.log('선택된 구: ', selectedDistrict);

    // 쿼리 스트링을 URL의 일부로 포함하여 API요청을 전송
    const url = new URL(`${BASE_URL}/api/petsitter/search`);
    url.search = new URLSearchParams({
      page: 1, // 검색 결과의 첫 페이지를 불러옵니다.
      careType: careType,
      serviceArea1: selectedRegion,
      serviceArea2: selectedDistrict,
    });

    try {
      const response = await axios.get(url.toString());
      if (response.status === 200 && response.data) {
        // 응답 데이터로부터 필터링된 펫시터 목록을 상태에 저장합니다.
        setPetSittersList(response.data);
      } else {
        console.error('Failed to fetch data:', response);
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }

    // 검색 후 항상 첫 페이지로 이동
    navigate(`/petsitter?page=1`);
  };

  return (
    <div className='petsitter'>
      <div className='petsitter-main'>
        <PetSitterRightBtns></PetSitterRightBtns>
        {/*********** petsitter search form **************/}
        <form id='petsitter-search' onSubmit={handleSubmit}>
          <div className='search-header'>사랑하는 반려견을 맡기세요</div>
          <br />
          <div className='search-dropdown'>
            <div className='service-selection'>
              서비스선택
              <select
                className='service-options'
                value={careType}
                onChange={(e) => setCareType(e.target.value)}
              >
                <option value='' disabled hidden></option>
                <option className='option-style' value='데이케어'>
                  데이케어
                </option>
                <option className='option-style' value='1박케어'>
                  1박케어
                </option>
              </select>
            </div>

            <div className='location-selection'>
              지역
              {/*********** 서울 vs 경기선택 ************/}
              <select
                className='location-options 1'
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value='' disabled hidden></option>
                <option value='서울시'>서울시</option>
                {/*************** 경기도 dropdown 확장기능 ************/}
                {/* <option value='gyeonggi'>경기도</option> */}
              </select>
              {/*********** 서울선택시 -> 구 dropdown, 경기선택시 -> 시 dropdown보여줌 ************/}
              <select
                className='location-options 2'
                value={selectedDistrict} // 이 상태를 추가하고 관리해야 합니다.
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                <option value='' disabled hidden></option>
                {districtOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/*********** 경기도 선택후 -> 시 선택시 보여줄 구 ************/}
              {/* <select className='location-options 3' defaultValue=''>
                <option value='' disabled hidden></option>
                <option value='gyeonggi'>xx구</option>
              </select> */}
            </div>
          </div>

          <div className='petsitter-search-btn'>
            <button type='submit'>검색하기</button>
          </div>
        </form>

        {/*/!*************** petsitter user list **************!/*/}
        {/* 현재 페이지의 아이템들을 렌더링 */}
        {/* {currentItems.map((item) => (
          <PetSitterList key={item.id} data={item} />
        ))} */}
        {/* {petSitters.map((item) => (
          <PetSitterList key={item.id} data={item}/>
        ))} */}
        <PetSitterList petSitters={petSittersList} />

        <nav>
          <ul className='pagination'>
            {pageNumbers.map((number) => (
              <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <Link to={`/petsitter?page=${number}`} className='page-link'>
                  {number}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PetSitter;
