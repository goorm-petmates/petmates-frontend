import React, { useEffect } from 'react';
import '../../styles/StyleSignUp.css';
import HeaderWithNav from '../../components/HeaderWithNav';

const TokenUpdate = () => {
  useEffect(() => {
    const updateToken = async () => {
      // 백엔드 엔드포인트로 POST 요청 보내기
      try {
        const response = await fetch('http://localhost:3000/api/oauth/jwt/update', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log('토큰 업데이트 완료'); // 갱신된 refreshToken 출력
        } else {
          console.error('Token update failed:', response.status);
          // 에러 처리 로직 (예: 로그아웃 처리)
        }
      } catch (error) {
        console.error('Error during token update:', error);
      }
    };

    updateToken(); // 토큰 업데이트 함수 호출
  }, []);

  return null;
};

export default TokenUpdate;