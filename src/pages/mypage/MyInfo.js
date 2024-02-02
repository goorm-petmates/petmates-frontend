import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/StyleMyInfo.css";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import Modal from 'react-modal';
import MemberFormModal from '../../components/MemberFormModal';
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
    setShowModal(!showModal);
  };

  const [pwRe, setpwRe] = useState("");
  const handlePasswordChange = (e) => {
    setpwRe(e.target.value);
  }
  const navigate = useNavigate();
  const navigateToPage = () => {
    if (!pwRe) {
      alert("모든 필수 입력 항목을 채워주세요.");
    } else navigate('/');
  };

  return (
    <div>
      <HeaderWithNav />

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
               src="/imgs/Logo-Icon.png" alt="기본 로고"/>
        </div>
        <div className="myinfo-inputs">
          <label className="myinfo-label">닉네임</label>
          <input className="myinfo-nameInput" placeholder="서버에서 받은 사용자 정보">
          </input>

          <label className="myinfo-label">이메일</label>
          <input className="myinfo-emailInput" placeholder="서버에서 받은 사용자 정보">
          </input>

          <label className="myinfo-label">휴대폰번호</label>
          <input className="myinfo-phoneInput"
                 placeholder="서버에서 받은 사용자 정보" disabled={true}>
          </input>

          <div className="myinfo-address-container">
            <label className="myinfo-label">주소</label>
            <button className="myinfo-address-button"
                    onClick={handleComplete}>
              우편번호 찾기</button>
            {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}

            <input className="myinfo-addressInput"
                   placeholder="주소"
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

      <Footer />
    </div>
  );
};

export default MyInfo;
