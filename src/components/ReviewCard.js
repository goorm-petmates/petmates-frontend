import React, { useState } from "react";
import "../styles/ReviewCard.css";

function ReviewCard(props){
  const { reviewImgSrc} = props;

  const [rating, setRating] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [review, setReview] = useState("");
  const handleStarClick = (selectedRating) => {
    if (!isSaved) {
      setRating(selectedRating);
    }
  };
  const handleSaveClick = () => {
    setIsSaved(true);

    console.log("후기가 저장되었습니다." + review);
  };

  const handleReview = (e) => {
    setReview(e.target.value);

    // 공백 여부 체크
    if (e.data === " " || e.data === 0) {
      alert("공백은 입력할 수 없습니다.");
    }
  }

  return(
    <div className="review-review-container">
      <img className="reserve-review-img" src={reviewImgSrc} alt="pet-img"/>
      <div className="reserve-review-info">
        <div className="review-starts">
          {/* 별점 표시 */}
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? 'star filled' : 'star'}
              onClick={() => handleStarClick(star)}>
          ★
        </span>
          ))}
        </div>
        <span>후기</span>
        <input className="reserve-review-input"
               type="text"
               value={review}
               disabled={isSaved}
               onInput={handleReview}/>
      </div>
      <button className="reserve-review-button"
              onClick={handleSaveClick}
              disabled={isSaved}>저장하기</button>
    </div>
  );
}

export default ReviewCard;