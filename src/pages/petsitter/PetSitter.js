import React, { useState, useEffect } from 'react';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer';
import PetSitterList from '../../components/PetSitterList.js';
import PetSitterRightBtns from '../../components/PetSitterRightBtns.js';
import '../../styles/StylePetSitter.css';

const PetSitter = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("선택된 서비스: ", selectedService);
    console.log("선택된 지역: ", selectedRegion);
    console.log("선택된 구/시: ", selectedDistrict);
  };

  useEffect(() => {
    if (selectedRegion === 'seoul') {
      setDistrictOptions(seoulDistricts);
    }
    // else if (selectedRegion === 'gyeonggi') {
    //   setDistrictOptions(gyeonggiCities);
    // }
  }, [selectedRegion]);

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
                <option value='seoul'>서울시</option>
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
        <PetSitterList></PetSitterList>
        <PetSitterList></PetSitterList>
        <PetSitterList></PetSitterList>
        <PetSitterList></PetSitterList>
        <PetSitterList></PetSitterList>

        {/*************** petsitter page numbers **************/}
        <a href='http://localhost:3004/petsitter' className='petsitter-list-nums'>
          1 2 3
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PetSitter;
