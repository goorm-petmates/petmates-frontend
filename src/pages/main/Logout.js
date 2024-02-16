import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    fetch('http://localhost:3000/api/kakao/logout', {
      method: 'POST',
      credentials: 'include', // 쿠키를 포함하여 요청
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response =>  response.json())
      .then(data => {
          if (data.result === 'success') {
            alert(data.data);
            console.log("카카오 로그아웃 성공");
            navigate('/'); // 성공 시 홈페이지로 리다이렉션
          } else {
            alert("서버에서 로그아웃 처리에 실패했습니다."); // 실패 메시지 표시
          }
        })
          .catch(error => {
            // 네트워크 에러 또는 서버 실패 처리
            console.error('Error:', error);
//            navigate('/logout-update'); // 로그아웃 업데이트 페이지로 리다이렉션
          });
      }, [navigate]);
    return null; // 로그아웃 컴포넌트는 UI를 렌더링하지 않음
};

export default Logout;