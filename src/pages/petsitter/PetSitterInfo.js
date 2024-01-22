import React from 'react';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer.js';
import '../../styles/StylePetSitterInfo.css';

const PetSitterInfo = () => {
  return (
    <div className='petsitter-info'>
      <HeaderWithNav></HeaderWithNav>
      <div className='petsitter-info-detail'>
        {/********** left-aside ************/}
        <img
          className='pesitter-profile-pic'
          src='https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxMjE3NHw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
          alt='petsitter profile pic'
        ></img>
        <p className='petsitter-title'>돌봄 경험 2년 있으며 펫시터 자격증 보유하였습니다.</p>
        <div className='petsitter-nickname'>닉네임</div>
        <div className='petsitter-address'>도로명주소</div>
        <div className='petsitter-order-by-date'> 작성일: yyyy.mm.dd</div>
        <div className='view-count'>조회: 10</div>
        <img
          className='pesitter-profile-pic'
          src='https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxMjE3NHw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
          alt='petsitter profile pic1'
        ></img>
        <img src='' alt='petsitter profile pic2'></img>
        <img src='' alt='petsitter profile pic3'></img>
        <img src='' alt='petsitter profile pic4'></img>
        <img src='' alt='petsitter profile pic5'></img>
        <p>
          펫시터 소개 및 이용 규칙
          <br />
          펫시터 내용 부분
          <br />
          경력 사항 자기소개 돌봄공간 : ex) 아파트 산책 가능여부: ex) 가능 예약관련 내용: 최대
          돌봄가능 마리수: ex)2마리 동거 반려동물: ex)없음 노령견 가능 여부(나이 포함): ex) 노령견
          12살 까지만 가능
        </p>
        <div>펫시터위치</div>
        <div>카카오맵</div>
        <div>리뷰(4) ⭐️⭐️⭐️⭐️</div>
        <div className='review-detail'>
          <img alt='petowner profile pic'></img>
          <div className='petowner-nickname'>닉네임</div>
          <div className='petowner-order-by-date'> 작성일: yy.mm.dd</div>
          <div className='petowner-rating'>⭐️⭐️⭐️</div>
          <div className='petowner-review'>
            후기 내용: 최대 입력 가능 글자 수 정해서 간단한 내용만 받기/후기 입력된 내용 출력/내용
            많으면 이렇게 줄 바꿔서 출력/이정도 공간 자유롭게 또는 고정?
          </div>
        </div>
      </div>

      {/********** right-aside 부터작성시작하기 ************/}
      <div className='right-aside'>
        이용금액 *데이케어: 기본 3시간
        <table>
          <thead>
            <tr>
              <th>데이케어</th>
              <th>추가이용 (30분)</th>
              <th>1박케어</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>30,000</td>
              <td>10,000</td>
              <td>40,000</td>
            </tr>
          </tbody>
          <div>맡길 반려견 선택</div>
          <button>반려동물을 먼저 등록하세요.</button>
        </table>
        <div>예약을 원하는.......</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PetSitterInfo;
