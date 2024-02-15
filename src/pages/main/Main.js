import React from 'react';
import '../../styles/StyleMain.css';
import { MainMenuPetsitter } from '../../components/MainMenuPetsitter';
// import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { useState } from 'react';

function Main() {
  const [menuIndex, setMenuIndex] = useState(1); // 현재 메뉴의 인덱스 상태

  const handleRightIconClick = () => {
    // 오른쪽 아이콘이 클릭되면 메뉴 인덱스를 증가시킵니다.
    setMenuIndex((prevIndex) => (prevIndex % 3) + 1);
  };
  const handleLeftIconClick = () => {
    // 왼쪽 아이콘이 클릭되면 메뉴 인덱스를 감소시킵니다.
    setMenuIndex((prevIndex) => (prevIndex - 2 + 3) % 3 + 1);
  };


  return (
    <div className>
      {/*<HeaderWithNav/>*/}

      <div className="main-container">
        <div className="main-banner">
          <div className="menu-icons">
            <button className="left-icon"
                    onClick={handleLeftIconClick}>
              &lt;
            </button>
            <button className="right-icon"
                    onClick={handleRightIconClick}>
              &gt;
            </button>
          </div>
          <div className="menu-contents">
              {menuIndex === 1 && (
                <>
                  <div className="menu-left">
                    <div className="menu-title">펫시터{menuIndex}</div>
                    <div className="menu-text">css check{menuIndex}</div>
                    <div className="menu-list">{menuIndex} / 3</div>
                  </div>
                  <img className="menu-img" alt="Dog" src="/imgs/dog3.jpeg" />
                </>
              )}
              {menuIndex === 2 && (
                <>
                <div className="menu-left">
                  <div className="menu-title">돌봄지원</div>
                  <div className="menu-text">지금 시작하세요</div>
                  <div className="menu-list">2 / 3</div>
                </div>
                  <img className="menu-img" alt="Dog" src="/imgs/dog4.jpeg" />
                </>
              )}
              {menuIndex === 3 && (
                <>
                  <div className="menu-left">
                  <div className="menu-title">다른 메뉴</div>
                  <div className="menu-text">다른 내용</div>
                  <div className="menu-list">3 / 3</div>
                </div>
                  <img className="menu-img" alt="Dog" src="/imgs/dog2.jpeg" />
                </>
              )}
          </div>
        </div>

        <div className="main-petsitter-components">
          <MainMenuPetsitter text="PETMATES로 등록하시고 마음을 나누세요!" />
          <MainMenuPetsitter text="PETMATES로 선택한 환경에서 편안하게 맡겨주세요 !" />
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Main;
