import React, { useState } from 'react';

function MemberFormInput({ type, imageSrc, label, placeholder, name, onInput, validate }) {
  const [errorMessage, setErrorMessage] = useState("");

  // 입력 핸들러
  const handleInput = (e) => {
    const inputValue = e.target.value;

    // 공백 여부 체크
    if (inputValue.includes(" ") || e.data === " ") {
      setErrorMessage("공백은 입력할 수 없습니다.");
      // 부모 컴포넌트에서 전달받은 onInput 함수 호출
      onInput(name, inputValue, "공백은 입력할 수 없습니다.");
      return;
    }

    // 유효성 검사 수행
    const validationResult = validate(inputValue);

    // 에러 메시지 설정
    setErrorMessage(validationResult);

    // 부모 컴포넌트에서 전달받은 onInput 함수 호출
    onInput(name, inputValue, validationResult);

    // 콘솔에 입력된 값을 출력
    console.log(`${label}: ${inputValue}`);
  };

  // 스페이스바 입력 무시
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div>
        <img src={imageSrc} alt={"Icon"} />
        <span>{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      />
      {errorMessage && (
        <div style={{ color: 'red' }}>{errorMessage}</div>
      )}
    </div>
  );
}

export default MemberFormInput;
