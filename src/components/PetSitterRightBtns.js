import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegPenToSquare } from 'react-icons/fa6';
import '../styles/StylePetSitterRightBtns.css';

export const PetSitterRightbtns = () => {
  return (
    <div>
      <div className='petsitter-right-bar'>
        <button type='button' className='apply-btn'>
          <Link to='/petsitterform'>
            <FaRegPenToSquare />
            펫시터 지원하기
          </Link>
        </button>
        <button type='button' className='guide-btn'>
          <Link to='/petsitterguide'>
            <FaRegPenToSquare />
            이용안내
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PetSitterRightbtns;
