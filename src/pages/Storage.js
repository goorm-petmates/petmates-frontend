// import React, { useState,useEffect } from "react";
//
// const Storage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//
//   useEffect(() => {
//     // 컴포넌트가 마운트될 때 로컬 스토리지에서 토큰을 가져와서 로그인 상태를 확인
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//
//     // 컴포넌트가 마운트될 때 로컬 스토리지에서 username과 password를 가져와서 설정
//     const storedUsername = localStorage.getItem("storedUsername");
//     const storedPassword = localStorage.getItem("storedPassword");
//
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//
//     if (storedPassword) {
//       setPassword(storedPassword);
//     }
//   }, []);
//
//    const handleLogin = async () => {
//      // 서버에 로그인 요청을 보내고 JWT 토큰을 받아온다고 가정
//      try {
//        const response = await fetch("https://localhost:8080", {
//          method: "POST",
//          headers: {
//            "Content-Type": "application/json",
//          },
//          body: JSON.stringify({ username, password }),
//        });
//
//        if (response.ok) {
//          const { token } = await response.json();
//
//          // JWT 토큰을 로컬 스토리지에 저장
//          localStorage.setItem("accessToken", token);
//          setIsLoggedIn(true);
//
//          // username과 password를 로컬 스토리지에 저장
//          localStorage.setItem("storedUsername", username);
//          localStorage.setItem("storedPassword", password);
//
//          console.log("로그인");
//        } else {
//          console.error("로그인 실패");
//        }
//      } catch (error) {
//        console.error(error);
//      }
//    };
//
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//
//   const handleLogout = () => {
//     // 로컬 스토리지에서 토큰 제거
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("storedUsername");
//     localStorage.removeItem("storedPassword");
//     setIsLoggedIn(false);
//
//     console.log("로그아웃.");
//   };
//
//     return (
//       <div>
//         <h1>{isLoggedIn ? "로그인 중" : "로그인"}</h1>
//
//         {isLoggedIn ? (
//           <button onClick={handleLogout}>로그아웃</button>
//         ) : (
//           <div>
//             <div>
//               <label>Username:</label>
//               <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button onClick={handleLogin}>로그인</button>
//           </div>
//         )}
//       </div>
//     );
//   };
//
// export default Storage;