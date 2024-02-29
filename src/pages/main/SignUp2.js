import React, { useEffect, useState } from 'react';
import MemberFormModal from '../../components/MemberFormModal';
import '../../styles/StyleSignUp.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Post from '../../components/Post';
import Footer from '../../components/Footer';
import TokenUpdate from './TokenUpdate.js';

function SignUp2() {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState({
    userNickName: '',
    userPhone: '',
    userEmail: '',
    fullAddr: '',
    roadAddr: '',
    detailAddr: '',
    latitude: '',
    longitude: '',
    zipcode: ''
  });
  const [isNicknameChanged, setIsNicknameChanged] = useState(false); // 사용자가 닉네임 입력: true, 서버에서 받아온 닉네임: false
  const [showModal, setShowModal] = useState(false);
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [nicknameModalMessage, setNicknameModalMessage] = useState('');

  // Post2 컴포넌트에서 전달받은 값을 상태에 저장하는 함수
  const setCompany = (fullAddr, roadAddr, detailAddr, latitude, longitude, zipcode) => {
    setMemberInfo(prevState => ({
      ...prevState,
      fullAddr,
      roadAddr,
      detailAddr,
      latitude,
      longitude,
      zipcode
    }));
  };
  const [errorNickName, setErrorNickName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // 가입하기 버튼 클릭 시 호출되는 함수
  const handleSubmit = async () => {
    const payload = {
      ...memberInfo,
      userNickName: isNicknameChanged ? memberInfo.userNickName : null,
    };
    try {
      const response = await fetch('https://api.petmates.co.kr/api/members/test/api/members/join/save', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json(); // 서버로부터의 응답을 JSON 형태로 변환
      if (data.result === 'success') {
        alert(data.data);
        navigate('/'); // 성공 시 홈페이지로 리다이렉션
      } else {
        alert(data.data); // 실패 메시지 표시
      }
    } catch (error) {
      console.error('회원가입 중 에러 발생:', error);
    }
  };

  // 스페이스바 입력 무시
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

// 닉네임 중복확인
  const handleDoubleCheck = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/members/join/doublecheck', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userNickName: memberInfo.userNickName }),
      });
      const data = await response.json();
      if (data.result === 'success') {
        openModal();
        setNicknameModalMessage('사용 가능한 닉네임입니다.');
      } else {
        openModal();
        setNicknameModalMessage('이미 등록된 닉네임입니다. 다른 닉네임을 사용해주세요 :)');
      }
    } catch (error) {
      // 여기서 에러 처리
      console.error('닉네임 중복 확인 중 에러가 발생했습니다:', error);
      openModal();
      setNicknameModalMessage('닉네임 중복 확인 중 에러가 발생했습니다.');
    }
  };

  // 닉네임 유효성 체크
  const handleNickName = (e) => {
    const newNickName = e.target.value;

    // 닉네임 상태 업데이트
    setMemberInfo(prevState => ({
      ...prevState,
      userNickName: newNickName,
    }));

    // 공백 여부 체크
    if (newNickName === " " || newNickName.length === 0) {
      setErrorNickName("공백은 입력할 수 없습니다.");
      return;
    }
    // 길이 및 문자 유효성 체크
    if (newNickName.length < 2 || newNickName.length > 10) {
      setErrorNickName("2~10자 이내로 입력하세요");
    } else if (!/^[가-힣a-zA-Z]+$/.test(newNickName)) {
      setErrorNickName("한글 또는 영문만 사용 가능합니다");
    } else {
      setErrorNickName("");
    }
  }

// 휴대폰번호 유효성 체크
  const handlePhone = (e) => {
    const phone = e.target.value;
    setMemberInfo(prevState => ({
      ...prevState,
      userPhone: phone, // 수정: userPhone 상태 업데이트
    }));

    // 공백 여부 체크
    if (phone === " " || phone === 0) {
      alert("공백은 입력할 수 없습니다.");
    }

    if (/^\d+$/.test(phone)) {
      if (phone.length === 11) {
        return setErrorPhone("");
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

// 우편번호 찾기 버튼 클릭 시 팝업 토글
  const togglePopup = () => {
    setPopup(!popup);
  };
//  const handleComplete = (data) => {
//    setPopup(!popup);
//  }

  // 페이지 렌더링 시 회원 정보 가져오기 // 수정
  useEffect(() => {
    fetch('https://api.petmates.co.kr/api/members/test/api/members/join', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response =>  response.json())
      .then(data => {
        console.log(data.email); // 데이터 확인
        console.log(data.nickname); // 데이터 확인
        setMemberInfo(prevState => ({
          ...prevState,
          userNickName: data.nickname !== null ? data.nickname : prevState.userNickName,
          userEmail: data.email, // 이메일 상태 업데이트
        }));
        setIsNicknameChanged(data.nickname === null);
      })
      .catch((error) => console.error('Error:', error));
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행되도록 함


  return (
    <div>
      <div className="MemberInput">
        <div className="Signup-title"> 추 가 정 보 입 력</div>
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
                 readOnly={!isNicknameChanged}
                 onChange={handleNickName}
                 onKeyDown={handleKeyDown}
                 required={true}
          />
          {isNicknameChanged && (
            <button onClick={handleDoubleCheck}>중복 확인</button>
          )}
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
                 readOnly
                 required={true}
                 onKeyDown={handleKeyDown} />
        </div>

        <div className="input-phone">
          <label>휴대폰번호(*)</label>
          <input id="phone" type="text"
                 className="signup-member-input"
                 placeholder="ex) 01012345678"
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
                  onClick={togglePopup}>
            우편번호 찾기</button>
          {popup && <Post setCompany={setCompany}></Post>}
          <input id="address" type="text"
                 className="signup-member-input signup-address-input"
                 placeholder="주소"
                 readOnly
                 value={memberInfo.fullAddr}
                 required={true}
                 name="address"
                 onChange={handleInput}
          />
        </div>

        <button className="MemberJoinButton" onClick={handleSubmit}>
          가입하기
        </button>

        {showModal && (
          <MemberFormModal
            title="중복확인"
            text={nicknameModalMessage}
            onClose={closeModal}
          />
        )}

      </div>
      <div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp2;