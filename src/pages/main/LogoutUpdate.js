import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutUpdate = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    fetch('http://localhost:3000/api/kakao/logout/update', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.result == 'success') {
          console.log("카카오 토큰 갱신 완료")
          console.log("카카오 로그아웃 재요청")
          navigate('/logout');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [navigate]);
};

export default LogoutUpdate;