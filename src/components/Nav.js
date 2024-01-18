import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StyleNav.css';
import { useState } from 'react';

const Nav = () => {
  const [isGnbOpen, setIsGnbOpen] = useState(false);

  const handleMouseOver = () => {
    setIsGnbOpen(true);
  };

  const handleMouseOut = (e) => {
    if (e.target.id === 'gnb') {
      setIsGnbOpen(false);
    }
  };

  return (
    <div className='nav-element' onMouseOut={handleMouseOut}>
      <ul id="gnb" className={isGnbOpen ? 'on' : ''} onMouseOver={handleMouseOver}>
        <li>
          <button className='headerButtons nav-petsitter'>
            <Link to='/sitter'>펫시터</Link>
          </button>
          <div className="snb">
            <ul className="nav-list-petsitter">
              <li>
                <img className="nav-logo" src="/imgs/Logo.png" alt="Logo"/>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button className='headerButtons nav-community'>
            <Link to='/comm'>커뮤니티</Link>
          </button>
          <div className="snb">
            <ul className="nav-list-community">
              <li>일상공유</li>
              <li>보호자 찾기</li>
            </ul>
          </div>
        </li>
        <li>
          <button className='headerButtons nav-mypage'>
            <Link to='/myinfo'>마이페이지</Link>
          </button>
          <div className="snb last-snb">
            <ul className="nav-list-mypage">
              <li style={{ marginTop: 0}}>
                <Link to='/myinfo' style={{ textDecoration: "none", color:"#000000"}}>
                  내정보
                </Link>
              </li>
              <li>
                <Link to='/sitter' style={{ textDecoration: "none", color:"#000000"}}>
                  작성글
                </Link>
              </li>
              <li>
                <Link to='/sitter' style={{ textDecoration: "none", color:"#000000"}}>
                  예약 내역
                </Link>
              </li>
              <li>
                <Link to='/sitter' style={{ textDecoration: "none", color:"#000000"}}>
                  펫시터 관리
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className='nav-bar' id="header"></div>
    </div>
  );
};

export default Nav;