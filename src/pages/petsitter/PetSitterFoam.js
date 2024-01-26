import React, { useState, useEffect } from 'react';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer.js';
import PetSitterRightbtns from '../../components/PetSitterRightBtns.js';
import { RiImageAddFill } from 'react-icons/ri';
// import axios from 'axios';
import '../../styles/StylePetSitterFoam.css';

const PetSitterFoam = () => {
  /****************input데이터 관련 form 관리 (이미지, 텍스트인풋) *********************/
  const [images, setImages] = useState({}); // 이미지 상태 관리

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    daycarePrice: '',
    extraPrice: '',
    overnightPrice: '',
  }); //텍스트 인풋 상태 관리

  const [isFormValid, setIsFormValid] = useState(false); //form validation 상태관리

  /******이미지 사진첨부 관련 로직 *****/
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const id = event.target.id;

    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setImages((prevImages) => ({
          ...prevImages,
          [id]: fileReader.result,
        }));
      };
      fileReader.readAsDataURL(file);
    }
  };

  /********* 폼 숫자 인풋 자리수 제한 유효성체크  **********/
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;
    // 숫자 필드에 대한 처리
    if (name === 'daycarePrice' || name === 'overnightPrice') {
      // daycarePrice와 overnightPrice는 5자리 숫자로 제한
      newValue = value.replace(/[^\d]/g, '').slice(0, 5);
    } else if (name === 'extraPrice') {
      // extraPrice는 4자리 숫자로 제한
      newValue = value.replace(/[^\d]/g, '').slice(0, 4);
    }

    // 폼 데이터 업데이트
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

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

    //인풋에 실시간으로 입력되는 값 콘솔로그로 보여줌
    // console.log(
    //   'Form validity status:',
    //   isValid,
    //   '| Images count:',
    //   imageCount,
    //   '| FormData:',
    //   formData,
    // );
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
    // Additional check for form validity (optional, as button will be disabled)
    if (!isFormValid) {
      console.log('Form is not valid, submission prevented');
      return; // 유효하지 않으면 폼 제출 방지
    }

    {
      /**********인풋데이터 백엔드서버연결전 콘솔로그 확인******/
    }
    console.log('Form Data: ', formData);
    console.log('Images: ', images);

    {
      /*****인풋데이터 백엔드서버있을때 적용할 코드************/
    }
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
  };

  return (
    <div>
      <HeaderWithNav></HeaderWithNav>
      <PetSitterRightbtns></PetSitterRightbtns>
      <div className='petsitter-foam'>
        <div className='petsitter-foam-header'>
          PETMATES의 펫시터를 모집합니다. <br />
          <span>*이용안내 필독*</span>
        </div>
        <div className='petsitter-foam-container'>
          <form onSubmit={handleSubmit}>
            {/*펫시터 지원하기 글이 이미 저장되있을때 버튼 활성화*/}
            <div className='raise-post'>
              <button className='raise-post-btn'>끌어올리기</button>
            </div>
            {/************************************/}
            <div className='petsitter-add-imgs-text'>사진첨부</div>

            <div className='add-imgs-container'>
              <div className='add-imgs-boxes'>
                {[1, 2, 3, 4, 5].map((num) => {
                  const id = `user-img${num}`;
                  return (
                    <div className='imgs-input' key={id}>
                      <input
                        type='file'
                        id={id}
                        accept='image/*'
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                      />
                      <label htmlFor={id} className='custom-file-upload'>
                        <RiImageAddFill />
                        {images[id] && <img src={images[id]} alt={`Uploaded ${id}`} />}
                      </label>
                    </div>
                  );
                })}

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

              <div className='add-imgs-text'>
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
                maxLength={40}
                placeholder='* 제목을 입력해 주세요 (40자 제한)'
              ></input>
              <textarea
                id='petsitter-foam-content'
                name='content'
                // value='{formData.content}'
                onChange={handleInputChange}
                maxLength={500}
                placeholder='* 내용을 입력해 주세요 (500자 제한)&#13;&#10;(아래내용 순서 변경)&#13;&#10;
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
              <div className='daycare-price-inputs'>
                <label>
                  데이케어 금액
                  <input
                    type='text'
                    name='daycarePrice'
                    id='daycare-price-input'
                    onChange={handleInputChange}
                    placeholder=' 데이케어 금액을 입력하세요'
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
                    placeholder=' 추가이용 금액을 입력하세요'
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
                1박케어 금액
                <input
                  type='text'
                  name='overnightPrice'
                  id='overnight-price-input'
                  onChange={handleInputChange}
                  placeholder=' 1박케어 금액을 입력하세요'
                  onInput={(e) => {
                    // 숫자만 입력되도록 제한, 5자리로 제한
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 5);
                    // 상태 업데이트
                    handleInputChange(e);
                  }}
                ></input>
                <div className='price-input-caution'>
                  *데이케어 or 1박케어 서비스 둘중 하나 선택하거나 둘다 가능할시 원하는 금액을
                  입력해주세요.
                  <br />
                  (데이케어만 가능한경우 데이케어 추가금액도 꼭 같이 입력해주세요!)
                </div>
              </label>
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

export default PetSitterFoam;
