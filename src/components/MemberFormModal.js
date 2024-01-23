import React from 'react';
import '../styles/StyleModal.css';

function MemberFormModal({ title, text, onClose }) {

  const handleClose = () => {
    if (onClose) {
      onClose(); // 부모 컴포넌트에서 전달한 onClose 함수 호출
    }
  };

  return (
    <div className="modalContainer">
      <div className="signup-modal-header">
        <h2>{title}</h2>
        <button onClick={handleClose}>X</button>
      </div>
      <div className="signup-modal-text">{text}</div>
      <button className="signup-modal-button" onClick={handleClose}>확인</button>
    </div>
  );
}

export default MemberFormModal;