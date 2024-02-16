import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer';
import PetSitterList from '../../components/PetSitterList.js';
import PetSitterRightBtns from '../../components/PetSitterRightBtns.js';
import '../../styles/StylePetSitter.css';
import PetSittersData from './PetSittersData.js';

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const PetSitter = () => {
  const navigate = useNavigate();

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [filteredPetSitters, setFilteredPetSitters] = useState([]); // 펫시터 검색후 상태관리
  const [isFiltered, setIsFiltered] = useState(false); // handleSubmit이 호출되었는지 추적하는 상태

  //페이지네이션 상태관리
  const query = useQuery();
  const currentPage = parseInt(query.get('page')) || 1;
  const [itemsPerPage] = useState(4);

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

  // 필터링된 결과인 filteredPetSitters를 사용하여 페이지네이션 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFilteredItems = filteredPetSitters.slice(indexOfFirstItem, indexOfLastItem);
  // // 필터링되지 않은 원본 데이터를 기반으로 한 현재 페이지의 아이템 계산
  const currentItems = isFiltered
    ? filteredPetSitters.slice(indexOfFirstItem, indexOfLastItem)
    : PetSittersData.slice(indexOfFirstItem, indexOfLastItem);

  // // 페이지네이션을 위한 페이지 번호 계산
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil((isFiltered ? filteredPetSitters : PetSittersData).length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('선택된 서비스: ', selectedService);
    console.log('선택된 지역: ', selectedRegion);
    console.log('선택된 구/시: ', selectedDistrict);

    // 필터링 로직을 실행하여 전체적으로 일치하는 결과를 찾음
    const filtered = PetSittersData.filter(
      (petSitter) =>
        petSitter.address?.includes(selectedRegion) &&
        petSitter.address?.includes(selectedDistrict) &&
        petSitter.services?.includes(selectedService),
    );
    // 필터링된 결과를 상태에 저장
    setFilteredPetSitters(filtered);
    setIsFiltered(true); // 필터링이 실행되었음을 표시

    // 검색 후 항상 첫 페이지로 이동
    navigate('/petsitter?page=1');
  };

  return (
    <div className='petsitter'>
      <HeaderWithNav></HeaderWithNav>
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
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
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
        {currentItems.map((item) => (
          <PetSitterList key={item.id} data={item} />
        ))}

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
