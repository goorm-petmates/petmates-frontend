import React, { useEffect, useState } from 'react';
import '../styles/StyleHeaderWithNav.css';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext.js';

const HeaderWithNav = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const { isLoggedIn } = useAuth(); // 로그인 상태를 가져옵니다.
  console.log(isLoggedIn);

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
            <div>
              {localStorage.getItem('isNewUser') != null && (
                <Link to="/tokenupdate" className="log_out">
                  토큰갱신
                </Link>
              )}
            </div>
            <div>
              {isLoggedIn ? (
                <Link to="/logout" className="log_out">
                  로그아웃
                </Link>
              ) : (
                <Link to="/login" className="log_in">
                  로그인
                </Link>
              )}
            </div>
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
