import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isValidateToken, setIsValidateToken] = useState(false);

  useEffect(() => {
    // Define a function to fetch the login status
    const fetchLoginStatus = () => {
      fetch('https://petmates.co.kr/api/kakao/login/status', {
        method: 'GET',
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoggedIn(data.isLoggedIn);
          setIsValidateToken(data.isValidateToken);
        })
        .catch((error) => console.error('Error:', error));
    };

    // Call the fetch function
    fetchLoginStatus();

    // Optional: Return a cleanup function to handle component unmounting
    return () => {
      // Implement any cleanup operations you might need
      // For example, you might want to abort the fetch operation
    };
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isValidateToken,
    setIsValidateToken,
  };

  console.log('Return value: ', value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
