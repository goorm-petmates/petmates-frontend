import React from 'react';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer.js';
import '../../styles/StylePetSitterInfo.css';

const PetSitterInfo = () => {
  return (
    <>
      <HeaderWithNav></HeaderWithNav>
      <div className='petsitter-info-post'>
        <div className='petsitter-info-detail'>
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
            <img src='' alt='petsitter profile pic2'></img>
            <img src='' alt='petsitter profile pic3'></img>
            <img src='' alt='petsitter profile pic4'></img>
            <img src='' alt='petsitter profile pic5'></img>
          </span>

          <div className='self-introduction'>
            <div className='self-introduction-head'>펫시터 소개 및 이용 규칙</div>
            <p>
              펫시터 내용 부분
              <br />
              <br />
              경력 사항 자기소개 돌봄공간 : ex) 아파트 산책 가능여부: ex) 가능
            </p>
          </div>

          <div className='petsitter-location'>펫시터위치</div>
          <div className='kakao-map'>카카오맵</div>
          <div className='petsitter-review'>리뷰(4) ⭐️⭐️⭐️⭐️</div>

          <div className='petsitter-review-detail'>
            <img
              className='petowner-profile-pic'
              src='/imgs/Logo-Icon.png'
              alt='petowner profile pic'
            ></img>
            <div className='petowner-review-text'>
              <span className='petowner-nickname'>닉네임</span>
              <span className='petowner-order-by-date'> yy.mm.dd</span>
              <span className='petowner-rating'>⭐️⭐️⭐️</span>
            </div>

            <div className='petowner-review'>
              후기 내용: 최대 입력 가능 글자 수 정해서 간단한 내용만 받기/후기 입력된 내용 출력/내용
              많으면 이렇게 줄 바꿔서 출력/이정도 공간 자유롭게 또는 고정?
            </div>
          </div>
        </div>

        {/********** right-side ************/}
        <div className='petsitter-right-side'>
          <div className='price-table'>
            <div>이용금액 </div>
            <div> *데이케어: 기본 3시간</div>
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
            </table>
          </div>

          <div>맡길 반려견 선택</div>
          <button>반려동물을 먼저 등록하세요.</button>
          <div>예약을 원하는.......</div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PetSitterInfo;
