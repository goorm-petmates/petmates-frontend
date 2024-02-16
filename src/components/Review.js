import React, { useState } from "react";
import "../styles/ReviewCard.css";
import { data2 } from '../pages/Data';

function Review(props) {
  const { reviewImgSrc, petInfo, onSave, state} = props;
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isReviewSaved, setIsReviewSaved] = useState(false);

  const handleSaveReview = () => {
    onSave(rating, reviewText);
    setIsReviewSaved(true);
    setIsWritingReview(false);
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
              <div className="write-review">
                후기: { reviewText || data2.review_content}
                <br />
              </div>
              <div className="write-stars">
                별점: {[...Array( rating || data2.review_star)].map((_, index) => (
                <span key={index} className="star filled" style={{ color: "gold" }}>★</span>
              ))}
              </div>
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



