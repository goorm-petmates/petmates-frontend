import React from 'react';
import '../styles/StylePetSitterInfoReview.css';

const PetSitterInfoReview = ({
  reviewPic,
  reviewNickname,
  reviewCreateAt,
  reviewRating,
  reviewContents,
}) => {
  return (
    <div className='petsitter-review-container'>
      <div className='petsitter-review-detail'>
        <img
          className='petowner-profile-pic'
          // src='/imgs/Logo-Icon.png'
          src={reviewPic}
          alt='petowner profile pic'
        ></img>
        <div className='petowner-review-right'>
          <div className='petowner-review-text'>
            <div className='petowner-review-top'>
              <span className='petowner-nickname'>{reviewNickname}</span>
              <span className='petowner-order-by-date'>{reviewCreateAt}</span>
            </div>
            <span className='petsitter-rating'>
              {[...Array(Math.round(reviewRating))].map((_, index) => (
                <span key={index} className='star filled' style={{ color: 'gold' }}>
                  ★
                </span>
              ))}
            </span>
          </div>
          <div className='petowner-review'>{reviewContents}</div>
        </div>
      </div>
    </div>
  );
};

export default PetSitterInfoReview;
