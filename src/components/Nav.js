import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StyleNav.css';

const Nav = () => {
  return (
    <div className='element'>
      <button className='headerButtons nav-petsitter'>
        <Link to='/sitter'>펫시터</Link>
      </button>
      <button className='headerButtons nav-community'>
        <Link to='/comm'>커뮤니티</Link>
      </button>
      <button className='headerButtons nav-mypage'>
        <Link to='/mypage'>마이페이지</Link>
      </button>
      <div className='nav-bar'></div>
    </div>
  );
};

export default Nav;
