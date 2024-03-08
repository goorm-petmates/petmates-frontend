import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StylePetSitterList.css';

const PetSitterList = ({ petSitters }) => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

  const handleNavigate = (id) => {
    navigate(`/petsitterinfo/${id}`);
  };

  return (
    <ul className='petsitter-lists'>
      {petSitters.map((sitter) => (
        <li key={sitter.id} className='petsitter-list' onClick={() => handleNavigate(sitter.id)}>
          <img
            className='petsitter profile-pic'
            src={
              //카카오프로필 이미지 없는유저는 기본이미지 보여주기
              sitter.isKakaoProfile
                ? sitter.profilePath
                : process.env.PUBLIC_URL + '/imgs/Logo-Icon.png'
            }
            alt='petsitter profile pic'
          ></img>

          <div className='petsitter-list-text'>
            <span className='petsitter nickname'>{sitter.nickname}</span>
            <span className='petsitter title'>{sitter.title}</span>
            <div>
              <span className='petsitter rating'>
                {/* {sitter.rating} */}
                {[...Array(Math.round(sitter.rating))].map((_, index) => (
                  <span key={index} className='star filled' style={{ color: 'gold' }}>
                    ★
                  </span>
                ))}
              </span>
              <span className='petsitter review-count'> (리뷰 {sitter.reviewCnt}개)</span>
              <span className='petsitter address'>{sitter.roadAddr}</span>
            </div>
          </div>

          <div className='petsitter-price-container'>
            <div className='petsitter standard-price'>데이케어: {sitter.standardPrice}원</div>
            <div className='petsitter night-price'>1박케어: {sitter.nightPrice}원</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PetSitterList;
