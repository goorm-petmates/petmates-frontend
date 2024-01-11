import React, { useState } from 'react';
import MemberFormInput from "../components/MemberFormInput";
import MemberFormModal from "../components/MemberFormModal";
import '../styles/StyleSignUp.css';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const navigateToPage = (path) => {
    navigate(path);
  };
  const [showModal, setShowModal] = useState(false); // Modal을 보여주기 위한 상태 추가
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };

  // setInputValue와 validateId 함수를 정의해줘야 합니다.
  const setInputValue = (name, value) => {
    setInputValue((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };
  const onChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setInputValue(name, value);
    }
    handlePasswordChange(e);
  };
  const [passwordValue, setPasswordValue] = useState("");

  const handlePasswordChange = (e) => {
    if (e && e.target && e.target.value) {
      setPasswordValue(e.target.value);
    }
  };

  const getPasswordValue = () => {
    return passwordValue;
  };

  const validateField = (name, inputValue) => {
    if (name === "id") {
      if (!inputValue.includes("@" && ".com")) {
        return "이메일 형식으로 입혁해 주세요";
      } else {
        return "사용 가능한 아이디입니다";
      }
    }
    if (name === "nickName") {
      if (inputValue.length < 2 || inputValue.length > 10) {
        return "2~10자 이내로 입력하세요 ";
      } if (!/^[가-힣a-zA-Z]+$/.test(inputValue)) {
        return "한글 또는 영문만 사용 가능합니다";
      } else {
        return "사용 가능한 닉네임입니다";
      }
    }
    if (name === "pw"){
      if (inputValue.length < 8 || inputValue.length > 16) {
        return "2~10자 이내로 입력하세요 ";
      } if (!/[a-zA-Z]/.test(inputValue) || !/[~!@#$%^&*()_+|<>?:{}]/.test(inputValue) || !/[0-9]/.test(inputValue)) {
        return "영문, 특수문자, 숫자를 모두 포함해야 합니다";
      } else if (!/[~!@#$%^&*()_+|<>?:{}]/.test(inputValue)) {
        return "특수문자가 적어도 1개 이상 포함되어야 합니다";
      } else if (!/[0-9]/.test(inputValue)) {
        return "숫자가 적어도 1개 이상 포함되어야 합니다";
      } else {
        return "사용 가능한 비밀번호입니다";
      }
    }
    if (name === "pwRe"){
      const passwordValue = getPasswordValue();
      if (inputValue !== passwordValue) {
        return "비밀번호가 일치하지 않습니다";
      }  else {
        return "비밀번호가 일치합니다";
      }
    }
    if(name === "phone"){
      if (/^\d+$/.test(inputValue)) {
        if (inputValue.length === 11) {
          return "사용 가능한 휴대전화 번호입니다";
        } else {
          return "휴대전화 11자를 입력하세요";
        }
      } else {
        return "숫자만 입력해주세요";
      }
    }
  };

  return (
    <div>
      <h1>회원가입페이지</h1>
      <div className={"joinLogo"}>
        <img src={""} alt={"Logo"} />
      </div>
      <div className={"MemberInput"}>
        <MemberFormInput
          type="text"
          imageSrc="/path/to/your/image.jpg"
          label="닉네임(*)"
          placeholder="2~10자의 한글, 영문, 숫자 조합"
          name="nickName"
          onInput={onChange}
          validate={(inputValue) => validateField("nickName", inputValue)}
        />

        <div className={"MemberInputAline"}>
          <MemberFormInput type="text"
                           imageSrc="/path/to/your/image.jpg"
                           label="이메일(*)"
                           placeholder="ex) example@gmail.com"
                           name="id"
                           onInput={onChange}
                           validate={(inputValue) => validateField("id", inputValue)}
          />
          <button>중복 확인</button>
        </div>

        {/* 비밀번호 type=password로 변경 */}
        <div className={"MemberInputAline"}>
          <MemberFormInput type="text"
                           imageSrc="/path/to/your/image.jpg"
                           label="비밀번호(*)"
                           placeholder="8~16자리의 영문, 숫자, 특수문자 필수 포함"
                           name="pw"
                           onInput={onChange}
                           validate={(inputValue) => validateField("pw", inputValue)}
          />
          <MemberFormInput type="text"
                           imageSrc="/path/to/your/image.jpg"
                           label="비밀번호 확인(*)"
                           placeholder="비밀번호 재입력"
                           name="pwRe"
                           onInput={onChange}
                           validate={(inputValue) => validateField("pwRe", inputValue)}
          />
        </div>

        <div>
          <MemberFormInput type="text"
                           imageSrc="/path/to/your/image.jpg"
                           label="휴대폰번호(*)"
                           placeholder="ex) 0101234567"
                           name="phone"
                           onInput={onChange}
                           validate={(inputValue) => validateField("phone", inputValue)}
          />
        </div>

        <div className={"MemberInputAline"}>
          <MemberFormInput type="text"
                           imageSrc="/path/to/your/image.jpg"
                           label="주소(*)"
                           placeholder="api 사용 예정"
                           name="adress"
                           onInput={onChange}
                           validate={(inputValue) => validateField("adress", inputValue)}
          />
        </div>

        <div className={"MemberJoinButtons"}>
          <Button onClick={openModal} value="확인" />
          <Button onClick={() => navigateToPage('/')} value="취소" />
        </div>

        {showModal && (
          <MemberFormModal
            title="회원가입"
            text="회원가입 성공! 로그인 페이지로 이동"
            value="로그인 하러 가기"
            path="/login"
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