import React from "react";
import {useState} from "react";
import Button from "../components/Button";
import MemberFormModal from "../components/MemberFormModal";
import '../styles/StyleFindInfo.css';
import MemberFormInput from "../components/MemberFormInput";

function FindInfo() {

  const [showModal, setShowModal] = useState(false); // Modal을 보여주기 위한 상태 추가
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
    value: "",
    path: "",
  });
  const openModal = (title, text, value, path) => {
    setModalContent({ title, text, value, path });
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };
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
      <h1>아이디/비밀번호찾기페이지</h1>
      <div className={"findLogo"}>
        <img src={""} alt={"Logo"}/>
      </div>

      <div className={"findcontainer"}>
        <div className={"findId"}>
          <h1>아이디 찾기</h1>
          <div>
            <MemberFormInput type="text"
                             imageSrc="/path/to/your/image.jpg"
                             label="휴대폰번호(*)"
                             placeholder="ex) 0101234567"
                             name="phone"
                             onInput={onChange}
                             validate={(inputValue) => validateField("phone", inputValue)}
            />
            <Button onClick={() =>
              openModal(
                "아이디 찾기",
                "아이디 찾기 성공! 로그인 페이지로 이동합니다.",
                "확인",
                "/login"
              )} value="찾기"/>
          </div>
        </div>

        <div className={"findPw"}>
          <h1>비밀번호 찾기</h1>
          <div>
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
            <Button onClick={() =>
              openModal(
                "비밀번호 재설정",
                <div>
                  <div>재설정할 비밀번호를 입력하세요.</div>
                  <MemberFormInput
                    imageSrc="/path/to/your/image.jpg"
                    value="비밀번호"
                    placeholder="휴대전화 번로를 입력하세요~~"
                  />
                  <MemberFormInput
                    imageSrc="/path/to/your/image.jpg"
                    value="비밀번호 재입력"
                    placeholder="휴대전화 번로를 입력하세요~~"
                  />
                </div>,
                "재설정",
                "/login"
              )} value="찾기"/>
          </div>
        </div>

        {showModal && (
          <MemberFormModal
            title={modalContent.title}
            text={modalContent.text}
            value={modalContent.value}
            path={modalContent.path}
            onClose={closeModal}
          />
        )}

      </div>
    </div>
  );
}

export default FindInfo;