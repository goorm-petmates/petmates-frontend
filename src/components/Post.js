import DaumPostcode from "react-daum-postcode";
import '../styles/Post.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post(props) {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(data);
    console.log("fullAddress: " + fullAddress);
    console.log("data.zonecode: " + data.zonecode);

    props.setcompany({
      ...props.company,
      address:fullAddress,
    })
    getLatLng(data.address);
  };
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLatLng = async (combinedAddress) => {
    try {
      // 카카오 맵 API를 사용하여 주소에 대한 위도와 경도를 가져옵니다.
      const response = await axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
        params: {
          query: combinedAddress,
        },
        headers: {
          Authorization: "KakaoAK 2a0545dc2cd35dfd52e96098d3ef9162",
        },
      });

      // 가져온 데이터에서 위도와 경도를 추출합니다.
      const location = response.data.documents[0]?.address;

      if (location) {
        const { y: latitude, x: longitude } = location;
        console.log('위도: ', latitude, '경도: ', longitude);

        // 가져온 위도와 경도를 상태에 업데이트합니다.
        setLatitude(latitude);
        setLongitude(longitude);
      } else {
        console.error('주소에 대한 좌표를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  // useEffect를 사용하여 위도와 경도가 변경될 때마다 콘솔에 출력
  useEffect(() => {
    if (latitude && longitude) {
      console.log('현재 위도:', latitude, '경도:', longitude);
    }
  }, [latitude, longitude]);

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