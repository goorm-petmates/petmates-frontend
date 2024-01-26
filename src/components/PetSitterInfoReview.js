import React from 'react';
import '../styles/StylePetSitterInfoReview.css';

const PetSitterInfoReview = () => {
  return (
    <div>
      <div className='petsitter-review-detail'>
        <img
          className='petowner-profile-pic'
          src='/imgs/Logo-Icon.png'
          alt='petowner profile pic'
        ></img>
        <div>
          <div className='petowner-review-text'>
            <div className='petowner-review-left-side'>
              <span className='petowner-nickname'>닉네임</span>
              <span className='petowner-order-by-date'> yy.mm.dd</span>
            </div>
            <span className='petowner-rating'>⭐️⭐️⭐️⭐️</span>
          </div>
          <div className='petowner-review'>
            후기 내용: 최대 입력 가능 글자 수 정해서 간단한 내용만 받기/후기 입력된 내용 출력/내용
            많으면 이렇게 줄 바꿔서 출력/이정도 공간 자유롭게 또는 고정?
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSitterInfoReview;
