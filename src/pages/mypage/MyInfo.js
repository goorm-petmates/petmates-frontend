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
  const [memberInfo, setMemberInfo] = useState({
          nickname: '',
          phone: '',
          email: '',
          profileImage: '',
          fullAddr: '',
          roadAddr: '',
          detailAddr: '',
          latitude: '',
          longitude: '',
          zipcode: ''
      });
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
  // 페이지 렌더링 시 내정보 가져오기 // 수정
      useEffect(() => {
//        fetch('https://petmates.co.kr/api/my-page/check', {
        fetch('http://localhost:8080/api/my-page/check', {
          method: 'GET',
          credentials: 'include',
        })
        .then(response =>  response.json())
          .then(data => {
            console.log(data.email); // 데이터 확인
            console.log(data.nickname); // 데이터 확인
            setMemberInfo(prevState => ({
              ...prevState,
              nickname: data.nickname,
              email: data.email, // 이메일 상태 업데이트
              phone: data.phone,
              fullAddr: data.roadAddr,
              profileImage: data.profileImage
            }));
          })
        .catch((error) => console.error('Error:', error));
      }, []);
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

      // 휴대폰번호와 주소 입력 핸들러
          const handleInputChange = (e) => {
              const { name, value } = e.target;
              setMemberInfo(prevState => ({
                ...prevState,
                [name]: value,
              }));
          };

       // 스페이스바 입력 무시
      const handleKeyDown = (e) => {
          if (e.key === " ") {
            e.preventDefault();
          }
      };

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

    const handleEdit = async () => {
     const payload = {
         ...memberInfo
     };
     try {
//          const response = await fetch('https://petmates.co.kr/api/my-page/edit', {
         const response = await fetch('http://localhost:8080/api/my-page/edit', {
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
         } else {
             alert(data.data); // 실패 메시지 표시
         }
     } catch (error) {
         console.error('회원가입 중 에러 발생:', error);
     }
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
                 src={previewImg || memberInfo.profileImage}
                   alt="Profile" />
            <input
              className="myinfo-add-img-input"
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
            <input className="myinfo-nameInput"
              value={memberInfo.nickname}
              readOnly  >
            </input>

            <label className="myinfo-label">이메일</label>
            <input className="myinfo-emailInput"
                  value={memberInfo.email}
                  readOnly
                  required={true}>
            </input>

            <label className="myinfo-label">휴대폰번호</label>
            <input className="myinfo-phoneInput"
                  name="phone"
                  value={memberInfo.phone}
                  onChange={handleInputChange}
                   onInput={handlePhone}
                  onKeyDown={handleKeyDown}>
            </input>

            <div className="myinfo-address-container">
              <label className="myinfo-label">주소</label>
              <button className="myinfo-address-button"
                      onClick={togglePopup}>
                우편번호 찾기</button>
              {popup && <Post setCompany={setCompany}></Post>}

              <input className="myinfo-addressInput"
                     required={true}
                     name="address"
                     onChange={handleInput}
                     value={memberInfo.fullAddr}
                     ></input>
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
