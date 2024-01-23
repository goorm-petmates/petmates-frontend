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
                    <Link to='/reservationpet'>예약 내역</Link>
                  </li>
                  <li>
                    <Link to='/petinfo'>펫시터 정보</Link>
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
