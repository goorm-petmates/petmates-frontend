import React from "react";
import "../styles/StyleMainMenuPetsitter.css";
import { Link } from 'react-router-dom';
export const MainMenuPetsitter = (props) => {
  const {text} = props;

  return (

      <div className="main-petsitter">
        <div className="menu-petsitter-left">
          <div className="main-petsitter-title">
            펫시터 지원하기
          </div>
          <p className="main-petsitter-text">
            {text}
          </p>
        </div>
        <button className="main-petsitter-button">
          <Link to='/petsitter'
                style={{ textDecoration: 'none', color: '#ffffff' }}>
            지원하기
          </Link>
        </button>
      </div>

  );
};

export default MainMenuPetsitter;