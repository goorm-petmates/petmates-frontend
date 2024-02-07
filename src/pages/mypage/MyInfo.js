import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/StyleMyInfo.css";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import MemberDeleteModal from '../../components/MemberDeleteModal';
import {data1} from '../Data';
import { useNavigate } from 'react-router-dom';
const MyInfo = () => {
  const [enroll_company, setEnroll_company] = useState({
    address:'',
  });
  const [popup, setPopup] = useState(false);
  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]:e.target.value,
    })
  }
  const handleComplete = (data) => {
    setPopup(!popup);
  }

  const [showModal, setShowModal] = useState(false); // Modal을 보여주기 위한 상태 추가
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate('/login');
    }
  }, [navigate]);


  return (
    <div>
      <HeaderWithNav/>

      <div>
        <div className="mypage-bar" />
        <div className="mypage-bar-text">내정보</div>
      </div>

      <Link to='/myinfo'>
        <button className="mypage-myinfo-nav1">내정보</button>
      </Link>
      <Link to='/petinfo'>
        <button className="mypage-myinfo-nav2">반려동물 정보</button>
      </Link>

      <div className="mypage-navunderLine"></div>

      <div className="myinfo">
        <div>
          <img className="myinfo-picture"
               src={data1.profile ? data1.profile : "/imgs/Logo-Icon.png"} alt="기본 로고"/>
        </div>
        <div className="myinfo-inputs">
          <label className="myinfo-label">닉네임</label>
          <input className="myinfo-nameInput" value={data1.nickname}>
          </input>

          <label className="myinfo-label">이메일</label>
          <input className="myinfo-emailInput" value={data1.email}>
          </input>

          <label className="myinfo-label">휴대폰번호</label>
          <input className="myinfo-phoneInput"
                 value={data1.phone}
                 disabled={true}>
          </input>

          <div className="myinfo-address-container">
            <label className="myinfo-label">주소</label>
            <button className="myinfo-address-button"
                    onClick={handleComplete}>
              우편번호 찾기</button>
            {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}

            <input className="myinfo-addressInput"
                   placeholder={data1.address}
                   required={true}
                   name="address"
                   onChange={handleInput}
                   value={enroll_company.address}></input>
          </div>
        </div>

        <div className="myinfo-buttons">
          <button className="myinfo-quit" onClick={openModal}>탈퇴하기</button>
          <button className="myinfo-edit">수정하기</button>
        </div>
      </div>
      {showModal && (
        <MemberDeleteModal onClose={closeModal} />
      )}

      <Footer />
    </div>
  );
};

export default MyInfo;
