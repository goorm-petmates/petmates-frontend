import React, { useEffect, useState } from 'react';
import MemberFormModal from '../../components/MemberFormModal';
import '../../styles/StyleSignUp.css';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post';
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { data1 } from '../Data';

function SignUp() {
  const navigate = useNavigate();
  const navigateToPage = () => {
    if (!memberInfo || !enroll_company.address) {
      alert("모든 필수 입력 항목을 채워주세요.");
    } else navigate('/');
  };
  const [showModal, setShowModal] = useState(false); // Modal을 보여주기 위한 상태 추가
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };

  const [memberInfo, setMemberInfo] = useState({
    userNickName: "",
    userPhone: "",
    userEmail: "", // 수정: 이메일 상태 추가
  });

  const [errorNickName, setErrorNickName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  // 스페이스바 입력 무시
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  const handleNickName = (e) => {
    const newNickName = e.target.value;

    // 닉네임 상태 업데이트
    setMemberInfo(prevState => ({
      ...prevState,
      userNickName: newNickName,
    }));

    // 공백 여부 체크
    if (e.data === " " || e.data === 0) {
      setErrorNickName("공백은 입력할 수 없습니다.");
    }

    if (newNickName.length < 2 || newNickName.length > 10) {
      return setErrorNickName("2~10자 이내로 입력하세요 ");
    } if (!/^[가-힣a-zA-Z]+$/.test(newNickName)) {
      return setErrorNickName("한글 또는 영문만 사용 가능합니다");
    } else {
      return setErrorNickName("사용 가능한 닉네임입니다");
    }
  }

  const handlePhone = (e) => {
    const phone = e.target.value;
    setMemberInfo(prevState => ({
      ...prevState,
      userPhone: phone, // 수정: userPhone 상태 업데이트
    }));

    // 공백 여부 체크
    if (e.data === " " || e.data === 0) {
      alert("공백은 입력할 수 없습니다.");
    }

    if (/^\d+$/.test(phone)) {
      if (phone.length === 11) {
        return setErrorPhone("사용 가능한 휴대전화 번호입니다");
      } else {
        return setErrorPhone("휴대전화 11자를 입력하세요");
      }
    } else {
      return setErrorPhone("숫자만 입력해주세요");
    }
  }

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

  // 페이지 렌더링 시 회원 정보 가져오기 // 수정
  useEffect(() => {
    fetch('http://localhost:8080/api/members/join', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.email); // 데이터 확인
        console.log(data.nickname); // 데이터 확인
        setMemberInfo(prevState => ({
          ...prevState,
          userNickName: data.nickname !== null ? data.nickname : prevState.userNickName,
          userEmail: data.email, // 이메일 상태 업데이트
        }));
      })
      .catch((error) => console.error('Error:', error));
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행되도록 함

  // 중복확인 버튼 클릭 시 실행되는 함수
  const handleCheckDuplicate = () => {
    if ( memberInfo.userNickName === data1.nickname) {
      // 입력된 닉네임이 data1의 닉네임과 같은 경우 모달창 띄우기
      setShowModal(true);
    } else {
      // 닉네임이 중복되지 않은 경우 알림창 띄우기
      alert("사용 가능한 닉네임입니다.");
    }
  };

  return (
    <div>
      <div className="MemberInput">
        <div className="Signup-title"> 회 원 가 입</div>
        <div className="Signup-text">
          <span className="Signup-span" style={{ color: 'red' }}>(*)</span>
          표시는 필수입력 항목입니다.
        </div>

        <div className='MemberInputAline'>
          <label className="aline-input-label">닉네임(*)</label>
          <input id="nickName" type="text"
                 className="aline-input"
                 placeholder="2~10자의 한글, 영문, 숫자 조합"
                 value={memberInfo.userNickName}
                 onInput={handleNickName}
                 readOnly={memberInfo.userNickName !== ""}
                 onKeyDown={handleKeyDown} />
          <button className="input-aline-button" onClick={handleCheckDuplicate}>중복 확인</button>
          {errorNickName && (
            <div style={{ color: 'red',
              marginTop:"5px",
              fontSize: '10px' }}>
              {errorNickName}</div>
          )}
        </div>

        <div className="input-email">
          <label>이메일(*)</label>
          <input id="email" type="text"
                 className="signup-member-input"
                 placeholder="2~10자의 한글, 영문, 숫자 조합"
                 value={memberInfo.userEmail}
                 onInput={handleNickName}
                 readOnly
                 onKeyDown={handleKeyDown} />
        </div>

        <div className="input-phone">
          <label>휴대폰번호(*)</label>
          <input id="phone" type="text"
                 className="signup-member-input"
                 placeholder="ex) 0101234567"
                 value={memberInfo.userPhone}
                 onInput={handlePhone}
                 onKeyDown={handleKeyDown} />
          {errorPhone && (
            <div style={{ color: 'red', marginTop: '-7px', fontSize: '10px' }}>
              {errorPhone}</div>
          )}
        </div>

        <div className="input-address">
          <label>주소(*)</label>
          <button className="address-button"
                  onClick={handleComplete}>
            우편번호 찾기</button>
          {popup && <Post company={enroll_company}
                          setcompany={setEnroll_company}></Post>}

          <input id="address" type="text"
                 className="signup-member-input signup-address-input"
                 placeholder="주소"
                 onKeyDown={handleKeyDown}
                 required={true}
                 name="address"
                 onChange={handleInput}
                 value={enroll_company.address}
          />
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


      <Footer />
    </div>
  );
}

export default SignUp;