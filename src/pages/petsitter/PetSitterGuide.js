import React from 'react';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer.js';
import PetSitterRightbtns from '../../components/PetSitterRightBtns.js';
import '../../styles/StylePetSitterGuide.css';

const PetSitterGuide = () => {
  return (
    <div>
      <HeaderWithNav></HeaderWithNav>
      <PetSitterRightbtns></PetSitterRightbtns>
      <div className='petsitter-guide-container'>
        <div className='left-side'>
          <div className='left-side-header'>펫시터 지원자 이용안내</div>
          <p className='left-side-content'>
            1. 반려견 키운 경험 최소 2년 이상
            <br />
            <br />
            2. 어린 자녀(만 8세 이하)가 없는 환경
            <br />
            <br />
            3. 산책 가능한 환경
            <br />
            <br />
            4. 케어 환경은 반드시 비흡연
            <br />
            <br />
            5. 데이케어는 최소 3시간 이상부터 가능합니다.
            <br />
            <br />
          </p>
        </div>
        <div className='right-side'>
          <div className='right-side-header'>반려인 이용안내</div>
          <p className='right-side-content'>
            1. 취소규정 <br /> <br />
            2. 예약 취소 및 변경 시, 시터와 사전 협의 <br /> <br />
            3. 시터와 사전협의되지 않은 경우 책임 지지 않음 <br /> <br />
            4. 사료, 간식 등 챙겨서 보내주세요 <br /> <br />
            5. 공격적인 아이나 입질있는 아이 불가 <br /> <br />
            6. 대형견(10kg 이상)은 이용 불가 <br /> <br />
            7. 산책용품, 장난감 등 기본 용품 챙겨서 보내주세요. <br /> <br />
            8. 피부질환같은 전염병이 있는 아이 불가 <br /> <br />
            9. 데이케어는 최소 3시간 이상부터 가능합니다. <br /> <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetSitterGuide;
