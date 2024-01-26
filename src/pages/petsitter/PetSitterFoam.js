import React from 'react';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer.js';
import PetSitterRightbtns from '../../components/PetSitterRightBtns.js';
import { RiImageAddFill } from 'react-icons/ri';

import '../../styles/StylePetSitterFoam.css';

const PetSitterFoam = () => {
  return (
    <div>
      <HeaderWithNav></HeaderWithNav>
      <PetSitterRightbtns></PetSitterRightbtns>
      <div className='petsitter-foam'>
        <div className='petsitter-foam-header'>
          PETMATES의 펫시터를 모집합니다. <br />
          *이용안내 필독*
        </div>
        <div className='petsitter-foam-container'>
          <form>
            <div className='petsitter-foam-top'>
              <div style={{ marginLeft: '5px', fontWeight: 'bold' }}>사진첨부</div>
              <button className='raise-post-btn'>끌어올리기</button>
            </div>

            <div className='add-imgs-container'>
              <div className='add-imgs-boxes'>
                <input type='file' id='user-img1' accept='image/*'></input>
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
                </label>
              </div>

              <div className='add-imgs-text'>
                *얼굴 사진 필수
                <br />
                *돌볼환경 사진 필수
                <br />
                *최대 5장 등록 가능
              </div>
            </div>

            <div className='petsitter-foam-input-container'>
              <input
                type='text'
                id='petsitter-foam-title'
                name='title-input'
                placeholder='제목을 입력해 주세요 (*필수입력)'
              ></input>
              <textarea
                id='petsitter-foam-content'
                placeholder='내용을 입력해 주세요.(*필수입력)&#13;&#10;(아래내용 순서 변경)&#13;&#10;
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
                    type='number'
                    id='daycare-price-input'
                    placeholder=' 원하는 금액을 입력하세요'
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                  ></input>
                </label>
                <label>
                  추가이용 금액(30분 기준)
                  <input
                    type='number'
                    id='extra-30mins-price-input'
                    placeholder=' 원하는 금액을 입력하세요'
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                  ></input>
                </label>
              </div>

              <label>
                1박케어 금액
                <input
                  type='number'
                  id='overnight-price-input'
                  placeholder=' 원하는 금액을 입력하세요'
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                  }}
                ></input>
              </label>
            </div>

            <div className='petsitter-form-btns'>
              <button type='reset' className='cancel-btn'>
                취소
              </button>
              <button type='submit' className='save-btn'>
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
