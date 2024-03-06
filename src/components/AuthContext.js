import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 상태 확인 API 호출
    fetch('http://localhost:8080/api/kakao/login/status', {
//    fetch('https://petmates.co.kr/api/kakao/login/status', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => setIsLoggedIn(data.isLoggedIn))
      .catch(error => console.error('Error:', error));
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn
  };
  console.log("반환값: ", value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;