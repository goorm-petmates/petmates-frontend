import React, { useState } from 'react';
import '../styles/StyleHeaderWithNav.css';
import { Link } from 'react-router-dom';

const HeaderWithNav = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  // 로그아웃
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 로그인 상태를 나타내는 상태 변수

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    console.log("로그인 되었습니다.");
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    console.log("로그아웃 되었습니다.");
  };

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
            {isLoggedIn ? (
              <button onClick={handleLogoutClick} className='log_out'>
                로그아웃
              </button>
            ) : (
              <Link to='/login'>
                <a href='' className='log_in' onClick={handleLoginClick}>
                  로그인
                </a>
              </Link>
            )}
          </div>
        </div>

        {/* Navbar */}
        <nav className='navbar'
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>

          <Link to='/petsitter' className='nav-link'>
            펫시터
          </Link>
          <Link to='/community' className='nav-link'>
            커뮤니티
          </Link>
          <Link to='/myinfo' className='nav-link'>
            마이페이지
          </Link>

          {isDropdownVisible && (
            <div className='dropdown-content'>
              {/* 하위 메뉴 내용 */}
              <div className='flex-container'>
                <ul>
                  <li>
                    <img className="nav-list-logo" src="/imgs/Logo-Icon.png" alt="Logo"/>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to='/community/category1'>일상공유</Link>
                  </li>
                  <li>
                    <Link to='/community/category2'>보호자 찾기</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to='/myinfo'>내정보</Link>
                  </li>
                  <li>
                    <Link to='/community'>작성글</Link>
                  </li>
                  <li>
                    <Link to='/reservepetsitter'>예약 내역</Link>
                  </li>
                  <li>
                    <Link to='/mymanagement'>펫시터 관리</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default HeaderWithNav;
