import "../../styles/StyleBasic.css";
import React from 'react';

function Basic() {
  return (
    <div className="element">
      <div className="asideleft"/>
      <div className="sesection"/>
      <div className="asideright"/>
      <img className="logo" alt="Logo" src="/imgs/Logo.png"/>
      <div className="logintext">로그인</div>
      <button className="headerButtons petsiter">펫시터</button>
      <button className="headerButtons community">커뮤니티</button>
      <button className="headerButtons mypage">마이페이지</button>
      <button className="customerService">고객센터</button>
      <div className="copyright">2024</div>
    </div>
  );
}

export default Basic;