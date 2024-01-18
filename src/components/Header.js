import React from "react";
import "../styles/StyleHeader.css";
import {Link} from "react-router-dom";
function Header() {

  return (
    <div className="element">
      <button className="header">
        <Link to='/'>
          <img className="main-logo" alt="Logo" src="/img/Logo.png" />
        </Link>
      </button>

      <Link to='/login'>
        <button className="login-Button">로그인</button>
      </Link>
      <Link to='/signup'>
        <button className="signup-Button">회원가입</button>
      </Link>
    </div>
  );
}

export default Header;