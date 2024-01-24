import React, { useState } from "react";
import "../styles/ReviewCard.css";

function ReviewCard(props){
  const { reviewImgSrc} = props;

  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

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
               type="text" />
      </div>
      <button className="reserve-review-button">저장하기</button>
    </div>
  );
}

export default ReviewCard;