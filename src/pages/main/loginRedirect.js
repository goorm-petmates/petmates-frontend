import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom의 navigate 함수를 사용

const LoginRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 인가 코드 추출
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      fetch('https://api.petmates.co.kr/api/members/test/api/kakao/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: authorizationCode }),
      })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('isNewUser', data.isNewUser);
          console.log('isNewUser 저장됨:', localStorage.getItem('isNewUser'));

          // 새 사용자인 경우 '/signup'으로 리다이렉트, 그렇지 않으면 메인 페이지('/')로 리다이렉트
          if (data.isNewUser) {
            navigate('/signup'); // 새 사용자의 경우 '/signup'으로 리다이렉트
          } else {
            navigate('/'); // 기존 사용자의 경우 메인 페이지('/')로 리다이렉트
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [navigate]);

  return null;
};

export default LoginRedirect;