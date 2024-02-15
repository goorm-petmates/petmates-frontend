import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/StyleMyInfo.css";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import MemberDeleteModal from '../../components/MemberDeleteModal';
import {data1} from '../Data';
import { useNavigate } from 'react-router-dom';
// import { handlers } from '../../mocks/handlers';

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
    setShowModal(false);
  };

  //const navigate = useNavigate();

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //
  //   if (!isLoggedIn) {
  //     alert("로그인이 필요합니다.");
  //     navigate('/login');
  //   }
  // }, [navigate]);

  // // msw
  // const [userInfo, setUserInfo] = useState({});
  // useEffect(() => {
  //   fetch("/api/my-page/edit")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserInfo(data);
  //     });
  // }, []);

  const handleEdit = (e) => {
    alert('수정되었습니다.');
  }

  const [postImg, setPostImg] = useState(null); // 파일 정보를 담을 state
  const [previewImg, setPreviewImg] = useState(null); // 미리보기 이미지를 담을 state


  const uploadFile = (e) => {
    const file = e.target.files[0];

    // 허용된 확장자 배열
    const allowedExtensions = ["png", "jpg", "jpeg"];

    // 파일의 확장자를 가져와 소문자로 변환합니다.
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    // 확장자가 허용된 확장자인지 확인합니다.
    if (!allowedExtensions.includes(fileExtension)) {
      // 허용되지 않은 확장자면 알림을 띄우고 파일 선택을 취소합니다.
      alert("파일은 'png', 'jpg', or 'jpeg'만 업로드 할 수 있습니다.");
      setPostImg(null);
      return;
    }

    // 파일 크기를 가져와 1MB로 제한합니다.
    const maxSize = 1024 ** 2 * 1; // 1MB

    if (file.size > maxSize) {
      // 파일 크기가 1MB를 초과하면 알림을 띄우고 파일 선택을 취소합니다.
      alert(" 파일 크기가 1MB를 초과했습니다.");
      setPostImg(null);
      return;
    }
    // 파일 정보 저장
    setPostImg(file);

    // 미리보기 이미지 설정
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewImg(fileReader.result);

      // const base64Data = fileReader.result.split(',')[1];
      console.log('Base64 Encoded Data:', fileReader.result);
    };
    fileReader.readAsDataURL(file);

    fileReader.onerror = (error) => {
      console.error(error);
    };
  };

  return (
    <div>
      {/*<HeaderWithNav/>*/}

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
               src={data1.profile ? data1.profile : previewImg} alt="기본 로고" />
          <input
            className="pet-info-add-img-input"
            type="file"
            onChange={uploadFile}
            accept="image/*"
            style={{ display: 'none' }}
            id="fileInput"
          />
          <label className="myinfo-add-picture-button"
                 htmlFor="fileInput">사진 추가</label>
        </div>

        <div className="myinfo-inputs">
          <label className="myinfo-label">닉네임</label>
          <input className="myinfo-nameInput" value={data1.nickname}>
          </input>

          <label className="myinfo-label">이메일</label>
          <input className="myinfo-emailInput" value={data1.email} readOnly>
          </input>

          <label className="myinfo-label">휴대폰번호</label>
          <input className="myinfo-phoneInput"
                 value={data1.phone} readOnly
                 disabled={true}>
          </input>

          <div className="myinfo-address-container">
            <label className="myinfo-label">주소</label>
            <button className="myinfo-address-button"
                    onClick={handleComplete}>
              우편번호 찾기</button>
            {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}

            <input className="myinfo-addressInput"
                   placeholder={data1.address}
                   required={true}
                   name="address"
                   onChange={handleInput}
                   value={enroll_company.address}></input>
          </div>
        </div>

        <div className="myinfo-buttons">
          <button className="myinfo-quit" onClick={openModal}>탈퇴하기</button>
          <button className="myinfo-edit" onClick={handleEdit}>수정하기</button>
        </div>
      </div>
      {showModal && (
        <MemberDeleteModal onClose={closeModal} />
      )}

      <Footer />
    </div>
  );
};

export default MyInfo;
