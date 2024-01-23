import DaumPostcode from "react-daum-postcode";
import '../styles/Post.css';
import React from 'react';
import axios from 'axios';

function Post() {
  const handleComplete = (data) => {
    getLatLng(data.address);
  };
  const getLatLng = async (combinedAddress) => {
    try {
      // 카카오 맵 API를 사용하여 주소에 대한 위도와 경도를 가져옵니다.
      const response = await axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
        params: {
          query: combinedAddress,
        },
        headers: {
          Authorization: 'KakaoAK YOUR_KAKAO_REST_API_KEY',
        },
      });
      // const data = await response.json();

      // 가져온 데이터에서 위도와 경도를 추출합니다.
      const location = response.data.documents[0]?.address;

      if (location) {
        const { y: latitude, x: longitude } = location;
        console.log('위도:', latitude, '경도:', longitude);

      } else {
        console.error('주소에 대한 좌표를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  }

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