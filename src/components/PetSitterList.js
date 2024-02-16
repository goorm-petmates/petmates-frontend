import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StylePetSitterList.css';

const PetSitterList = ({ data }) => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

  const handleNavigate = () => {
    navigate(`/petsitterinfo/${data.id}`);
  };

  return (
    <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
      {/* 포스트목록에서 특정포스트 클릭시 상세페이지로 라우팅시킴
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul> */}
      <li className='petsitter-list'>
        <img
          className='petsitter profile-pic'
          src={data.profilePic1} // 이미지 URL을 props에서 받아옴
          alt='petsitter profile pic'
        ></img>

        <div className='petsitter-list-text'>
          <span className='petsitter nickname'>{data.nickname}</span>
          <span className='petsitter title'>{data.title}</span>
          <div>
            <span className='petsitter rating'>{data.rating}</span>
            <span className='petsitter review-count'>(리뷰 {data.reviewCnt}개)</span>
            <span className='petsitter address'>{data.address}</span>
          </div>
        </div>

        <div className='petsitter-price-container'>
          <div className='petsitter standard-price'>데이케어: {data.standardPrice}원</div>
          <div className='petsitter night-price'>1박케어: {data.nightPrice}원</div>
        </div>
      </li>
    </div>
  );
};

export default PetSitterList;
