import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer.js';
import PetSitterRightbtns from '../../components/PetSitterRightBtns.js';
import { RiImageAddFill } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
// import axios from 'axios';
import '../../styles/StylePetSitterForm.css';
import petSittersData from './PetSittersData';

const TestPetSitterForm = () => {
  /****************form input 상태 관리 (이미지, 텍스트) *********************/
  const [images, setImages] = useState({}); // 이미지 상태 관리
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    daycarePrice: '',
    extraPrice: '',
    overnightPrice: '',
  }); //텍스트, 숫자 인풋 상태 관리
  const [isFormValid, setIsFormValid] = useState(false); //form validation 상태관리
  const [isContentDefaultSet, setIsContentDefaultSet] = useState(false);

  //jwt토큰 확인
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //펫시터지원하기 완료후 버튼클릭시 펫시터관리페이지로 이동
  const navigate = useNavigate();

  //jwt토큰 localstorage에서 확인후 끌어올리기버튼의 렌더링을 조건부로 처리
  useEffect(() => {
    const token = localStorage.getItem('jwtToken'); //'jwtToken'부분을 실제 토큰키로 변경해야함
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  // prettier-ignore
  const handleFocus = () => {
    // 사용자가 처음으로 입력 필드에 포커스를 맞추었을 때만 실행
    if (!isContentDefaultSet) {
      setFormData({
        ...formData,
        content: `
1. 경력 사항
2. 자기소개
3. 돌봄공간 : ex) 아파트
4. 산책 가능여부: ex) 가능
5. 예약관련 내용:
6. 최대 돌봄가능 마리수: ex)2마리
7. 동거 반려동물: ex)없음
8. 노령견 가능 여부(나이 포함): ex) 노령견 12살 까지만 가능`,
      });
      setIsContentDefaultSet(true); // Default 값이 설정되었음을 표시
    }
  };
  // prettier-ignore

  /******이미지 사진첨부 관련 로직 *****/
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const id = event.target.id;

    // 사진첨부시 파일 확장자, 사이즈 유효성 체크
    const validFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const maxFileSize = 1024 * 1024; // 1MB

    if (file) {
    // 파일확장자 체크
    if (!validFileTypes.includes(file.type)) {
      alert('사진첨부시 PNG, JPG, JPEG 형태만 가능합니다.');
      return; // 
    }

    //파일사이즈 체크 
    if (file.size > maxFileSize) {
      alert('사진크기는 1MB 이하로만 가능합니다.');
      return; 
    }

      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setImages((prevImages) => ({
          ...prevImages,
          [id]: fileReader.result,
        }));
      };
      fileReader.readAsDataURL(file);
    } else {
      setImages((prevImages) => {
        const updatedImages = { ...prevImages };
        delete updatedImages[id];
        return updatedImages;
      });
    }
  };

  const handleRemoveImage = (id) => {
    setImages((prevImages) => {
      const updatedImages = { ...prevImages };
      delete updatedImages[id];
      return updatedImages;
    });
  };

  // 입력 변경 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 숫자 포맷 적용
  const formatNumber = (value) => {
    const numericValue = parseInt(value.replace(/[^\d]/g, ''), 10);
    if (!isNaN(numericValue)) {
      return numericValue.toLocaleString();
    }
    return '';
  };

  // onBlur 이벤트로 숫자 포맷 적용
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'daycarePrice' || name === 'extraPrice' || name === 'overnightPrice') {
      const formattedValue = formatNumber(value);
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    }
  };

  /********* 폼 숫자 인풋 자리수 제한 유효성체크  **********/
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   let newValue = value;

  //   // 숫자 필드에 대한 처리
  //   if (name === 'daycarePrice' || name === 'overnightPrice') {
  //     // daycarePrice와 overnightPrice는 5자리 숫자로 제한
  //     newValue = value.replace(/[^\d]/g, '').slice(0, 5);
  //   } else if (name === 'extraPrice') {
  //     // extraPrice는 4자리 숫자로 제한
  //     newValue = value.replace(/[^\d]/g, '').slice(0, 4);
  //   }

  //   // 인풋 폼 데이터 업데이트
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: newValue,
  //   }));
  // };

  /********* form 유효성 로직함수 **********/
  const checkFormValidity = () => {
    const imageCount = Object.keys(images).length;
    const { title, content, daycarePrice, extraPrice, overnightPrice } = formData;

    // form 유효성 함수사용시 필요한 조건
    const isValid =
      imageCount >= 2 &&
      title.trim() !== '' &&
      content.trim() !== '' &&
      ((daycarePrice.trim() !== '' && extraPrice.trim() !== '') || overnightPrice.trim() !== '') &&
      !(
        (daycarePrice.trim() === '' && extraPrice.trim() !== '' && overnightPrice.trim() !== '') ||
        (extraPrice.trim() === '' && daycarePrice.trim() !== '' && overnightPrice.trim() !== '')
      );

    setIsFormValid(isValid);

    console.log('checkFormValidity called, isValid:', isValid);
  };

  useEffect(() => {
    // formData와 images가 모두 초기 상태인 경우, 검증을 스킵(콘솔로그에서 맨초기에 유효성검사하는 메세지 2개 뜨지않게해줌)
    if (
      Object.keys(images).length === 0 &&
      Object.entries(formData).every(([key, value]) => value === '')
    ) {
      return;
    }

    checkFormValidity();
  }, [formData, images]);

  //////////////////////////////////////////////

  /******* form submit 로직 *********/
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit called, isFormValid:', isFormValid);

    //폼 유효성 검사 통과 시 alert 메시지 띄우기
    if (isFormValid) {
      alert('펫시터 지원하기가 완료되었습니다');
      navigate('/mymanagement');

      console.log('Form Data: ', formData);
      console.log('Images: ', images);

      // 폼 데이터를 서버로 전송하는 코드
      // const data = new FormData();
      // for (const key in formData) {
      //   data.append(key, formData[key]);
      // }
      // Object.keys(images).forEach((key) => {
      //   data.append('images', images[key]);
      // });

      // try {
      //   const response = await axios.post('your-backend-endpoint(실제 사용할 backend URL넣기', data);
      //   console.log(response.data);
      // } catch (error) {
      //   console.error('Error submitting form:', error);
      // }
    } else {
      console.log('Form is not valid, submission prevented');
    }
  };

  return (
    <div>

      <PetSitterRightbtns></PetSitterRightbtns>
      <div className='petsitter-foam'>
        <div className='petsitter-foam-header'>
          PETMATES의 펫시터를 모집합니다. <br />
          <span>*이용안내 필독*</span>
        </div>
        <div className='petsitter-foam-container'>
          <form onSubmit={handleSubmit}>
            {/*펫시터 지원하기 글이 이미 저장되있을때 버튼 활성화*/}
            {/*{isAuthenticated && (*/}
              <div className='raise-post'>
                <button className='raise-post-btn'>끌어올리기</button>
              </div>
            {/*)}*/}
            {/************************************/}
            <div className='petsitter-add-imgs-text'>사진첨부</div>

            <div className='add-imgs-container'>
              <div className="add-imgs-boxes">
                <div className="custom-file-upload">
                  <img src='/imgs/Photo001.jpeg' />
                </div>
                <div className="custom-file-upload">
                  <img src='/imgs/Photo002.jpeg' />
                </div>
                <div className="custom-file-upload">
                  <img src='/imgs/Photo003.jpeg' />
                </div>
                <div className="custom-file-upload">
                  <img src='/imgs/Photo004.jpeg' />
                </div>
                <div className="custom-file-upload">
                </div>

                {/*위 add-imgs-boxes부분 하드코딩*/}
                {/* <input type='file' id='user-img1' accept='image/*'></input>
                <label htmlFor='user-img1' className='custom-file-upload'>
                  <RiImageAddFill />
                </label>
                <input type='file' id='user-img2' accept='image/*'></input>
                <label htmlFor='user-img2' className='custom-file-upload'>
                  <RiImageAddFill />
                </label>
                <input type='file' id='user-img3' accept='image/*'></input>
                <label htmlFor='user-img3' className='custom-file-upload'>
                  <RiImageAddFill />
                </label>
                <input type='file' id='user-img4' accept='image/*'></input>
                <label htmlFor='user-img4' className='custom-file-upload'>
                  <RiImageAddFill />
                </label>
                <input type='file' id='user-img5' accept='image/*'></input>
                <label htmlFor='user-img5' className='custom-file-upload'>
                  <RiImageAddFill />
                </label> */}
              </div>

              <div className="add-imgs-text">
              *얼굴 사진 필수
                <br />
                *돌볼환경 사진 필수
                <br />
                *사진 최소 위 2장 필수
                <br />
                {/*공백1개추가*/}
                &nbsp;(최대 5장 등록 가능)
              </div>
            </div>

            <div className='petsitter-foam-input-container'>
              <input
                type='text'
                id='petsitter-foam-title'
                name='title'
                onChange={handleInputChange}
                minLength={10}
                maxLength={40}
                value={petSittersData.find(sitter => sitter.id === 1)?.title || ""}
              ></input>
              <textarea
                id='petsitter-foam-content'
                name='content'
                value={petSittersData.find(sitter => sitter.id === 1)?.contents || ""}
                onChange={handleInputChange}
                minLength={30}
                maxLength={500}
                onFocus={handleFocus}
                placeholder='* 내용을 입력해 주세요 (최소 30자 ~ 500자 제한, 아래내용 순서 변경)&#13;&#10;&#10;&#13;&#10;
                1. 경력 사항&#13;&#10;
                2. 자기소개&#13;&#10;
                3. 돌봄공간 : ex) 아파트&#13;&#10;
                4. 산책 가능여부: ex) 가능&#13;&#10;
                5. 예약관련 내용:&#13;&#10;
                6. 최대 돌봄가능 마리수: ex)2마리&#13;&#10;
                7. 동거 반려동물: ex)없음&#13;&#10;
                8. 노령견 가능 여부(나이 포함): ex) 노령견 12살 까지만 가능'
              />
            </div>

            <div className='petsitter-foam-price-inputs'>
              <div className='price-input-caution'>
                *데이케어 or 1박케어 서비스 둘중 하나 선택하거나 둘다 가능할시 원하는 금액을 숫자로
                입력해주세요.
                <br />
                (데이케어만 가능한경우 데이케어 추가금액도 꼭 같이 입력해주세요!)
              </div>
              <div className='daycare-price-inputs'>
                <label>
                  데이케어 금액(6시간)
                  <input
                    type='text'
                    name='daycarePrice'
                    id='daycare-price-input'
                    onChange={handleInputChange}
                    value={petSittersData.find(sitter => sitter.id === 1)?.standardPrice || ""}
                    onBlur={handleBlur}
                    placeholder=' 원하는 금액을 입력하세요'
                    onInput={(e) => {
                      // 숫자만 입력되도록 제한, 5자리로 제한
                      e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
                      // 상태 업데이트
                      handleInputChange(e);
                    }}
                  ></input>
                </label>
                <label>
                  데이케어 추가 금액(30분 단위)
                  <input
                    type='text'
                    name='extraPrice'
                    id='extra-30mins-price-input'
                    onChange={handleInputChange}
                    value={petSittersData.find(sitter => sitter.id === 1)?.addPrice || ""}
                    onBlur={handleBlur}
                    placeholder=' 원하는 금액을 입력하세요'
                    onInput={(e) => {
                      // 숫자만 입력되도록 제한, 4자리로 제한
                      e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
                      // 상태 업데이트
                      handleInputChange(e);
                    }}
                  ></input>
                </label>
              </div>
              <label>
                1박케어 금액(24시간)
                <input
                  type='text'
                  name='overnightPrice'
                  id='overnight-price-input'
                  onChange={handleInputChange}
                  value={petSittersData.find(sitter => sitter.id === 1)?.nightPrice || ""}
                  onBlur={handleBlur}
                  placeholder=' 원하는 금액을 입력하세요'
                  onInput={(e) => {
                    // 숫자만 입력되도록 제한, 5자리로 제한
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
                    // 상태 업데이트
                    handleInputChange(e);
                  }}
                ></input>
              </label>
              <div className='price-input-caution-num'>
                *데이케어와 1박케어금액은 만원 단위, 데이케어추가금액은 천원 단위로 입력가능합니다.
              </div>
            </div>

            <div className='petsitter-form-btns'>
              <button type='reset' className='cancel-btn'>
                취소
              </button>
              <button type='submit' className='save-btn' disabled={!isFormValid}>
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestPetSitterForm;
