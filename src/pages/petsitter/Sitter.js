import React from 'react';
import { FaRegPenToSquare } from 'react-icons/fa6';
import Basic from '../main/Basic.js';
import Nav from '../../components/Nav.js';
import Footer from '../../components/Footer.js';

const Sitter = () => {
  return (
    <div className='sitter'>
      <Basic></Basic>
      <Nav></Nav>
      <div>
        <button type='button'>
          <FaRegPenToSquare />
          펫시터 지원하기
        </button>
        <button type='button'>이용안내</button>
      </div>
      <form>
        <div>서비스선택</div>
        <div>지역</div>
        <button type='submit'>검색하기</button>
      </form>
      <div></div>
      <Footer></Footer>
    </div>
  );
};

export default Sitter;
