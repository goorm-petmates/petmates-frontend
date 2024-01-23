import React from 'react';
import '../styles/StyleHeaderWithNav.css';
import { Link } from 'react-router-dom';

const HeaderWithNav = () => {
  return (
    <>
      {/* Header */}
      <div className='header-with-nav'>
        <div className='main-header'>
          <div className='logo-with-icon'>
            <img className='logo-icon' alt='logo' src='/imgs/Logo-Icon.png' />
            <Link to='/'>
              <div className='logo'>petmates</div>
            </Link>
          </div>

          <div className='right-header'>
            <Link to='/login'>
              <a href='' className='log_in'>
                로그인
              </a>
            </Link>

            <Link to='/signup'>
              <a href='' className='log_out'>
                회원가입
              </a>
            </Link>
          </div>
        </div>

        {/* Navbar */}
        <nav className='navbar'>
          <Link to='/petsitter' className='nav-link'>
            펫시터
          </Link>
          <Link to='/community' className='nav-link'>
            커뮤니티
          </Link>
          <Link to='/myinfo' className='nav-link'>
            마이페이지
          </Link>
        </nav>
      </div>
    </>
  );
};

export default HeaderWithNav;
