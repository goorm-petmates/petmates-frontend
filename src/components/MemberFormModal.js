import React from 'react';
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import '../styles/StyleModal.css';

function MemberFormModal({ title, text, value, path, onClose }) {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(path);
  };
  const handleClose = () => {
    if (onClose) {
      onClose(); // 부모 컴포넌트에서 전달한 onClose 함수 호출
    }
  };

  return (
    <div className={"modalContainer"}>
      <div className={"header"}>
        <h2>{title}</h2>
        <button onClick={handleClose}>X</button>
      </div>
      <div>{text}</div>
      <Button onClick={navigateToPage} value={value} />
    </div>
  );
}

export default MemberFormModal;