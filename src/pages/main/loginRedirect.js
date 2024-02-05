import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const LoginRedirect = () => {
  const [query, setQuery] = useSearchParams();
  const [code, setCode] = useState("");
  // const [accessToken, setAccessToken] = useState()

  //1.리다이렉트 시에 받은 코드를 통해서 카카오 서버에 인증받을 code를 가져오기
  useEffect(() => {
    console.log("출력: " + code);
    setCode(query.get("code"));
  }, []);

  useEffect(() => {
    // URL에서 인가 코드 추출
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      console.log('Authorization Code:', authorizationCode);
      // 백엔드 서버로 인가 코드 전송
      axios.post('http://localhost:8080/api/kakao/login', {
        code: authorizationCode,
      })
        .then(response => {
          // 성공적으로 토큰을 받았을 경우의 처리
          console.log('Login successful', response);

          // 토큰에 따라 리디렉션할 페이지 결정
          if (response.data.isNewUser) {
            // 새로운 사용자일 경우 회원가입 페이지로 리디렉션
            window.location.href = '/signup';
          } else {
            // 기존 사용자일 경우 메인 페이지로 리디렉션
            localStorage.setItem('jwt', response.data.jwtToken);
            window.location.href = '/main';
          }
        })
        .catch(error => {
          // 에러 처리
          console.error('Error during login', error);
        });
    }
  }, []);

  return (
    <div>
    </div>
  );
};

export default LoginRedirect;