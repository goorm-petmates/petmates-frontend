// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaRegPenToSquare } from 'react-icons/fa6';
// import '../styles/StylePetSitterRightBtns.css';

// export const PetSitterRightbtns = () => {
//   return (
//     <div>
//       <div className='petsitter-right-bar'>
//         <button type='button' className='apply-btn'>
//           <Link to='/petsitterform'>
//             <FaRegPenToSquare />
//             펫시터 지원하기
//           </Link>
//         </button>
//         <button type='button' className='guide-btn'>
//           <Link to='/petsitterguide'>
//             <FaRegPenToSquare />
//             이용안내
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PetSitterRightbtns;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegPenToSquare } from 'react-icons/fa6';
import '../styles/StylePetSitterRightBtns.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const PetSitterRightBtns = () => {
  const navigate = useNavigate();
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    // JWT 토큰을 스토리지나 쿠키에서 가져옵니다.
    const token = localStorage.getItem('jwtToken') || ''; // 예시: JWT 토큰을 localStorage에서 가져옴
    setJwtToken(token);
  }, []);

  const fetchApplicationData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/petsitter/apply`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (response.data.status === 'new') {
        // '신규 등록'인 경우, form 페이지로 'new' 상태를 전달합니다.
        navigate('/petsitterform', { state: { status: 'new' } });
      } else if (response.data.status === 'success') {
        // '조회 성공'인 경우, form 페이지로 받아온 데이터를 전달합니다.
        navigate('/petsitterform', { state: { status: 'success', data: response.data.data } });
      }
    } catch (error) {
      console.error('Error fetching application data:', error);
    }
  };

  const handleApplyClick = async () => {
    await fetchApplicationData(); // 서버로부터 데이터를 가져오는 함수 호출
  };

  return (
    <div>
      <div className='petsitter-right-bar'>
        <button type='button' className='apply-btn' onClick={handleApplyClick}>
          <FaRegPenToSquare />
          펫시터 지원하기
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

export default PetSitterRightBtns;
