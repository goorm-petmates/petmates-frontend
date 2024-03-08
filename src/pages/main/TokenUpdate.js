import React, { useEffect } from 'react';
import '../../styles/StyleSignUp.css';
//import HeaderWithNav from '../../components/HeaderWithNav';
import { useNavigate } from 'react-router-dom';

const TokenUpdate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const updateToken = async () => {
      // 백엔드 엔드포인트로 POST 요청 보내기
      try {
//        const response = await fetch('http://localhost:8080/api/oauth/jwt/update', {
        const response = await fetch('https://petmates.co.kr/api/oauth/jwt/update', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log('토큰 업데이트 완료'); // 갱신된 refreshToken 출력
          navigate('/');
        } else {
          console.error('Token update failed:', response.status);
          navigate('/');
          // 에러 처리 로직 (예: 로그아웃 처리)
        }
      } catch (error) {
        console.error('Error during token update:', error);
        navigate('/');
      }
    };

    updateToken(); // 토큰 업데이트 함수 호출
  }, [navigate]);

  return null;
};

export default TokenUpdate;