import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StylePetSitterList.css';

const PetSitterList = () => {
  return (
    <div>
      {/* 포스트목록에서 특정포스트 클릭시 상세페이지로 라우팅시킴
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul> */}
      <li className='petsitter-list'>
        <Link to='/petsitterinfo'>
          <img
            className='petsitter profile-pic'
            src='https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxMjE3NHw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
            alt='petsitter profile pic'
          ></img>

          <div class='petsitter-list-text'>
            <span className='petsitter nickname'>닉네임</span>
            <span className='petsitter title'>
              돌봄 경험 2년 있으며 펫시터 자격증 보유하였습니다.
            </span>
            <div>
              <span className='petsitter rating'>⭐️⭐️⭐️</span>
              <span className='petsitter review-count'> 리뷰갯수</span>
              <span className='petsitter address'>도로명주소</span>
            </div>
          </div>

          <div className='petsitter-price-container'>
            <div className='petsitter standard-price'>1박케어: 35,000원</div>
            <div className='petsitter night-price'>데이케어: 15,000원</div>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default PetSitterList;
