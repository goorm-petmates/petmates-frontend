import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MemberDeleteModal.css'
import { data1 } from '../pages/Data';
function MemberDeleteModal({onClose}) {
  const handleClose = () => {
    if (onClose) {
      onClose(); // 부모 컴포넌트에서 전달한 onClose 함수 호출
    }
  };

  const [pwRe, setpwRe] = useState("");
  const handlePasswordChange = (e) => {
    setpwRe(e.target.value);
  }
  const navigate = useNavigate();
  const navigateToPage = async () => {
    if (!pwRe) {
      alert("카카오 계정을 입력해주세요.");
    } else {
      try {
        const response = await fetch('http://localhost:8080/api/members/delete', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json(); // 서버로부터의 응답을 JSON 형태로 변환
        if (data.result === 'success') {
          console.log('회원탈퇴 완료');
          alert(data.data);
          navigate('/'); // 성공 시 홈페이지로 리다이렉션
        } else {
          alert(data.data); // 실패 메시지 표시
        }
      } catch (error) {
        console.error('회원탈퇴 처리 중 오류가 발생했습니다.', error);
      }
    }
  };


  return (
    <div className="modalContainer">
      <div className="delete-modal-header">
        <h2>회원탈퇴</h2>
      </div>
      <div className="delete-modal-text">
        <p>
          <span className="info-modal-span">*탈퇴 안내 사항*</span> <br />
          '탈퇴 시 계정과 관련된 모든 권한이 사라지며 복구할 수 없습니다.' <br />
          '탈퇴 후 동일한 이메일로 재가입이 불가능합니다.' <br />
          '탈퇴 후 연동된 소셜 계정 정보도 사라집니다.' <br />
          '작성한 모든 게시물 및 관련 내역은 자동 삭제되어 복구할 수 없습니다.' <br />
          '현재 비밀번호를 입력하고 탈퇴하기를 누르시면 위 내용에 동의한 것으로 간주됩니다.' <br />
        </p>
      </div>

      <label className="myinfo-modal-label">
        카카오계정 입력:
        <br />
        <input
          className="myinfo-pw"
          type="text"
          value={pwRe}
          onChange={handlePasswordChange}
        />
      </label><br />
      <div className="myinfo-modal-buttons">
        <button className="myinfo-modal-button" onClick={navigateToPage}>탈퇴하기</button>
        <button className="myinfo-modal-close-button" onClick={handleClose}>닫기</button>
      </div>
    </div>
  );
}

export default MemberDeleteModal;