import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import '../../styles/ReserveReview.css';
import NoContents from '../../components/NoContents';
import Review from '../../components/Review';

const ReserveReview = () => {
  //const [selectedCard, setSelectedCard] = useState(data1.review === 'Y' ? '후기작성' : 'N');
  const [selectedCard, setSelectedCard] = useState(true);
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

  const [reviewCard, setReviewCard] = useState([]);

  useEffect(() => {
    fetch(`/api/petsitter/reviews`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        const formData = res.data.map((review) => ({
          id: review.id,
          reviewPic: review.reviewPic,
          petInfo: `${review.reviewNickname} / ${review.startDate} ~ ${review.endDate} / ${review.totalPrice}원 `,
          state: review.state,
        }));

        setReviewCard(formData);
        //setCheckedReservations(Array(formData.length).fill(true));
        //setReservationStates(Array(formData.length).fill('승인대기'));
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

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
        {/*{data1.review === 'N' ? (*/}
        {/*  <NoContents text='후기 작성 내역' />*/}
        {/*) : (*/}
        {/*  <>*/}
        {/*    <Review*/}
        {/*      reviewImgSrc='/imgs/pet_img_1.png'*/}
        {/*      petInfo={`${data1.name} / 2024.02.16 ~ 2024.02.16 / ${data1.price}원`}*/}
        {/*      onSave={handleSaveReview}*/}
        {/*      state={selectedCard}*/}
        {/*      reviewContent={data1.review_content}*/}
        {/*      reviewStar={data1.review_star}*/}
        {/*    />*/}

        {/*    <Review*/}
        {/*      reviewImgSrc='/imgs/dog3.jpeg'*/}
        {/*      petInfo={`${data2.name} / 2024.01.11 16시 ~ 19시 / ${data2.price}원`}*/}
        {/*      state={data2.review_status}*/}
        {/*      reviewContent={data2.review_content}*/}
        {/*      reviewStar={data2.review_star}*/}
        {/*    />*/}
        {/*  </>*/}
        {/*)}*/}

        {reviewCard.length > 0 ? (
          reviewCard.map((card) => (
              <Review
                reviewImgSrc={card.reviewPic}
                petInfo={card.petInfo}
                state={card.state}
                reviewContent={card.reviewContents}
                reviewStar={card.reviewRating}
                onSave={handleSaveReview} />
          ))
        ) : (
          <NoContents text='후기 내역이 없습니다.' />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReserveReview;
