import React from 'react';
import Footer from '../components/Footer.js';
import '../styles/StyleUserSupport.css';

const UserSupport = () => {
  return (
    <div>
      <div className='user-support-header'>고객센터</div>
      <div className='user-support-content'>
        문의 및 이용상담
        <br />
        Email : <a href='mailto:petmates@petmates.co.kr'>petmates@petmates.co.kr</a>
        <br />
        운영시간 : <span>평일 10:00~18:00(점심시간 12~13시) 주말, 공휴일 휴일</span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UserSupport;
