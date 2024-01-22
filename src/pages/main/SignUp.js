import React, { useState } from 'react';
import MemberFormInput from '../../components/MemberFormInput';
import MemberFormModal from '../../components/MemberFormModal';
import Button from '../../components/Button';
import '../../styles/StyleSignUp.css';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";

function SignUp() {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate('/login');
  };
  const [showModal, setShowModal] = useState(false); // Modal을 보여주기 위한 상태 추가
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };
  const [userNickName, setUserNickName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAdress, setUserAdress] = useState("");

  const [errorNickName, setErrorNickName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  // 스페이스바 입력 무시
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  const handleNickName = (e) => {
    setUserNickName(e.target.value);

    // 공백 여부 체크
    if (e.data === " " || e.data === 0) {
      setErrorNickName("공백은 입력할 수 없습니다.");
    }

    if (userNickName.length < 2 || userNickName.length > 10) {
      return setErrorNickName("2~10자 이내로 입력하세요 ");
    } if (!/^[가-힣a-zA-Z]+$/.test(userNickName)) {
      return setErrorNickName("한글 또는 영문만 사용 가능합니다");
    } else {
      return setErrorNickName("사용 가능한 닉네임입니다");
    }
  }

  const handlePhone = (e) => {
    setUserPhone(e.target.value);

    // 공백 여부 체크
    if (e.data === " " || e.data === 0) {
      alert("공백은 입력할 수 없습니다.");
    }

    if (/^\d+$/.test(userPhone)) {
      if (userPhone.length === 11) {
        return setErrorPhone("사용 가능한 휴대전화 번호입니다");
      } else {
        return setErrorPhone("휴대전화 11자를 입력하세요");
      }
    } else {
      return setErrorPhone("숫자만 입력해주세요");
    }
  }
  const handleAdress = (e) => {
    setUserAdress(e.target.value);

    // 공백 여부 체크
    if (e.data === " " || e.data === 0) {
      alert("공백은 입력할 수 없습니다.");
    }

  }

  return (
    <div>
      <Header/>
      <LeftAside/>
      <RightAside/>

      <div className="MemberInput">
        <div className="Signup-title"> 회 원 가 입</div>
        <div className="Signup-text">
          <span className="span" style={{ color: "red" }}>(*)</span>
          표시는 필수입력 항목입니다.
        </div>

        <div className={"MemberInputAline"}>
          <label>닉네임(*)</label>
          <input id="id" type="text"
                 className="signup-member-input"
                 placeholder="2~10자의 한글, 영문, 숫자 조합"
                 value={userNickName}
                 onInput={handleNickName}
                 onKeyDown={handleKeyDown} />
          <button onClick={openModal}>중복 확인</button>
          {errorNickName && (
            <div style={{ color: 'red', marginTop: "22px", fontSize: "10px" }}>
              {errorNickName}</div>
          )}
        </div>

        <div className="input-email">
          <label>이메일(*)</label>
          <input id="email" type="text"
                 className="signup-member-input"
                 placeholder="2~10자의 한글, 영문, 숫자 조합"
                 value="qwer@qwer.com"
                 onInput={handleNickName}
                 onKeyDown={handleKeyDown} />
        </div>

        <div className="input-phone">
          <label>휴대폰번호(*)</label>
          <input id="phone" type="text"
                 className="signup-member-input"
                 placeholder="ex) 0101234567"
                 value={userPhone}
                 onInput={handlePhone}
                 onKeyDown={handleKeyDown} />
          {errorPhone && (
            <div style={{ color: 'red', marginTop: "22px", fontSize: "10px" }}>
              {errorPhone}</div>
          )}
        </div>

        <div className="input-adress">
          <label>주소(*)</label>
          <input id="adress" type="text"
                 className="signup-member-input"
                 placeholder="api 사용 예정"
                 value={userAdress}
                 onInput={handleAdress}
                 onKeyDown={handleKeyDown} />
        </div>

        <button className="MemberJoinButton" onClick={navigateToPage}>
          가입하기
        </button>

        {showModal && (
          <MemberFormModal
            title="중복확인"
            text="이미 등록된 닉네임 입니다. 새로운 닉네임으로 다시 가입해주세요 :)"
            onClose={closeModal}
          />
        )}
      </div>
      <div>
      </div>
    </div>
  );
}

export default SignUp;