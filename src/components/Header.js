import React from "react";
import "../styles/StyleHeader.css";
function Header() {

  return (
    <div className="element">
      <img className="main-logo" alt="Logo" src="/imgs/Logo.png"/>
      <button className="login-Button">로그인</button>
      <button className="signup-Button">회원가입</button>

    </div>
  );
}

export default Header;