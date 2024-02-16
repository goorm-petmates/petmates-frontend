import DaumPostcode from "react-daum-postcode";
import '../styles/Post.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post({ setCompany }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleComplete = async (data) => {
    let fullAddr = data.address;
    let extraAddress = '';
    let roadAddr = fullAddr;
    let detailAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddr += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    // ' (' 기준으로 주소 나누기
    if (fullAddr.includes(' (')) {
      const parts = fullAddr.split(' (');
      roadAddr = parts[0];
      detailAddr = parts[1].slice(0, -1); // 마지막 ')' 제거
    }

    console.log(data);
    console.log("fullAddress: " + fullAddr);
    console.log("data.zonecode: " + data.zonecode);

    // 위도와 경도 가져오기
    await getLatLng(roadAddr);

    // SignUp2.js로 데이터 전달
    setCompany(fullAddr, roadAddr, detailAddr, latitude, longitude, data.zonecode);
  };

  const getLatLng = async (address) => {
    try {
      const response = await axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
        params: { query: address },
        headers: { Authorization: "KakaoAK 2a0545dc2cd35dfd52e96098d3ef9162" },
      });

      const location = response.data.documents[0]?.address;
      if (location) {
        setLatitude(parseFloat(location.y));
        setLongitude(parseFloat(location.x));
        console.log('위도: ', parseFloat(location.y), '경도: ', parseFloat(location.x));
      } else {
        console.error('주소에 대한 좌표를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  return (
    <div >
      <DaumPostcode
        className="postmodal"
        autoClose
        onComplete={handleComplete} />
    </div>
  );
}

export default Post;