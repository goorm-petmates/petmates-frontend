import React from "react";
import "../styles/StyleMain.css";
import {useState} from "react";
function Main() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="element">
      <div className="asideleft"/>
      <div className="sesection"/>
      <div className="asideright"/>
      <img className="logo" alt="Logo" src="/imgs/Logo.png"/>
      <div className="logintext">로그인</div>
      <button className="headerButtons petsiter"
              onMouseEnter={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}>펫시터</button>
      {showMore && (
        <div style={{ marginTop: "165px", backgroundColor: "red", width: "1000px", height: "300px" }}></div>
      )}
      <button className="headerButtons community">커뮤니티</button>
      <button className="headerButtons mypage">마이페이지</button>
      <div style={{ marginTop:"100px", backgroundColor: "red", width:"300px", height:"10px"}}></div>
      <button className="customerService">고객센터</button>
      <div className="copyright">2024</div>
    </div>
  );
}

export default Main;