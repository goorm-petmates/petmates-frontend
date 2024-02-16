import React, { useState } from 'react';
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import '../../styles/ReserveReview.css';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import NoContents from '../../components/NoContents';
import ReviewCard from '../../components/ReviewCard';
// import { useMutation } from 'react-query';
import Review from '../../components/Review';
import { data1, data2 } from '../Data';

const ReserveReview = () => {
  // // 후기작성
  // const { mutate: writeReview } = useMutation(async () => {
  //   try {
  //     const response = await fetch('/api/my-page/review', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // 필요한 데이터가 있다면 body에 추가할 수 있습니다.
  //     });
  //     const data = await response.json();
  //     // 성공적으로 후기 작성한 경우 리뷰 카드 표시 등의 처리를 할 수 있습니다.
  //   } catch (error) {
  //     // 오류 처리
  //     console.error("Error writing review:", error);
  //   }
  // });
  //
  // // 후기 가져오기
  // const { data: completedReviews, isLoading, isError } = useQuery('completedReviews', async () => {
  //   const response = await fetch('/api/petsitter/reviews');
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch completed reviews');
  //   }
  //   return response.json();
  // });

  const [selectedCard, setSelectedCard] = useState(data1.review === 'Y' ? '후기작성' : 'N');
  const [isReviewWritten, setIsReviewWritten] = useState(false);

  const handleCardClick = (cardState) => {
    setSelectedCard('작성완료');
    setIsReviewWritten(false);
  };

  const handleSaveReview = (rating, reviewText) => {
    // 후기 저장 로직을 구현합니다.
    console.log('별점:', rating);
    console.log('후기 내용:', reviewText);
  };

  return (
    <>
      {/*<HeaderWithNav />*/}

      <div>
        <div className='mypage-bar' />
        <div className='mypage-bar-text'>예약내역</div>
      </div>

      <Link to='/reservepetsitter'>
        <button className='reservation-review-nav1'>펫시터</button>
      </Link>
      <Link to='/reservecancle'>
        <button className='reservation-review-nav2'>취소내역</button>
      </Link>
      <Link to='/reservereview'>
        <button className='reservation-review-nav3' onClick={() => handleCardClick('후기작성')}>
          후기작성
        </button>
      </Link>

      <div className='mypage-navunderLine'></div>

      <div className='review-container'>
        {data1.review === 'N' ? (
          <NoContents text='후기 작성 내역' />
        ) : (
          <>
            <Review
              reviewImgSrc='/imgs/pet_img_1.png'
              petInfo={`${data1.name} / ${data1.birthYear} ~ ${data1.weight} / ${data1.price}원`}
              onSave={handleSaveReview}
              state={data1.review_status}
              reviewContent={data1.review_content}
              reviewStar={data1.review_star}
            />

            <Review
              reviewImgSrc='/imgs/dog3.jpeg'
              petInfo={`${data2.name} / ${data2.birthYear} ~ ${data2.weight} / ${data2.price}원`}
              state={data2.review_status}
              reviewContent={data2.review_content}
              reviewStar={data2.review_star}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReserveReview;
