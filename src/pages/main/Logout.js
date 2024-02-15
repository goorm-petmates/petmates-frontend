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
      .then(response => {
        // 상태 코드가 성공 범위인지 확인
        if (response.ok) {
          // 성공적으로 응답 받음
          return response.json(); // JSON으로 파싱하여 다음 then으로 전달
        } else {
          // 서버에서 실패 상태 코드 반환 (예: 400, 401, 500 등)
          throw new Error('서버에서 로그아웃 처리에 실패했습니다.'); // 에러를 throw하여 catch 블록으로 이동
        }
      })
      .then(data => {
        // 응답 데이터 처리
        console.log("카카오 로그아웃 성공", data);
        navigate('/'); // 홈으로 리다이렉션
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