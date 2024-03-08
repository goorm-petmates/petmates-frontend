import React, { useEffect, useState } from 'react';
import "../styles/ReviewCard.css";

function Review(props) {
  const { reviewImgSrc, petInfo, onSave, state} = props;
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isReviewSaved, setIsReviewSaved] = useState(false);

  const handleSaveReview = () => {
    fetch('/api/my-page/review/:petsitterId', {
      method: 'POST',
      body: JSON.stringify({
        rating: rating,
        contents: reviewText,
      })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        onSave(rating, reviewText);
        setIsReviewSaved(true);
        setIsWritingReview(false);

        // 후기가 저장되면서 상태 업데이트
        setCard(prevCard => [...prevCard, { reviewRating: rating, reviewContents: reviewText }]);

      })
  };

  const handleStarClick = (selectedRating) => {
    if (!isReviewSaved && isWritingReview) {
      setRating(selectedRating);
    }
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);

    // 공백 여부 체크
    if (e.target.value.trim() === "") {
      alert("후기를 입력해주세요.");
    }
  };

  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch(`/api/petsitter/reviews`,)
      .then((res) => res.json())
      .then((res) =>{
        console.log(res.data);

        const completedReviews = res.data.filter(review => review.state === "작성완료");
        console.log(completedReviews);

        setCard(completedReviews.map((review) => ({
          id: review.id,
          state: review.state,
          reviewRating: review.reviewRating,
          reviewContents: review.reviewContents
        })));
      })
      .catch((error) => {
        console.error(error);
      })
  },[]);

  return (
    <div className="review-review-container">
      <img className="reserve-review-img" src={reviewImgSrc} alt="Review" />
      <div className="reserve-review-info">
        {!isWritingReview ? (
          <div className="review-pet-info">{petInfo}</div>
        ) : (
          <>
            <div className="review-starts">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "star filled" : "star"}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <div>
              <label className="review-text">후기 작성: </label>
              <textarea
                value={reviewText}
                onChange={handleReviewChange}
                className="reserve-review-input"
              />
            </div>
          </>
        )}

        {!isReviewSaved && !isWritingReview && state !== "작성완료" &&(
          <button
            className="reserve-review-button"
            onClick={() => setIsWritingReview(true)}
          >
            후기 작성
          </button>
        )}

        {(isReviewSaved || state === "작성완료") && (
          <>
            <div className="review-pet-info">
              {card.map((item, index) => (
                item.state === "작성완료" && (
                <div key={index}>
                  <div className="write-review">
                    후기: { reviewText || item.reviewContents}
                    <br />
                  </div>
                  <div className="write-stars">
                    별점: {[...Array( rating || item.reviewRating)].map((_, index) => (
                      <span key={index} className="star filled" style={{ color: "gold" }}>★</span>
                    ))}
                  </div>
                </div>
                  )
              ))}
            </div>
            <button className="review-saved-button">작성완료</button>
          </>
        )}
      </div>
      {!isReviewSaved && isWritingReview &&(
        <button className="review-save-button" onClick={handleSaveReview}>
          저장하기
        </button>
      )}
    </div>
  );
}

export default Review;



