import React from 'react';
import { useState } from 'react';

import heart from '../../images/heart.svg';
import heartFilled from '../../images/heart-filled.svg';
import close from '../../images/close.svg';

import styles from './MoviesCard.scss';

function MoviesCard({ image, title, duration, isSaved }) {
  const [isLiked, setIsLiked] = useState(false);
  const likeButtonImage = isLiked ? heartFilled : heart;

  const handelikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <img className="card__image" src={image} alt="1" />
      <div className="card__description">
        <div className="card__title-container">
          <h2 className="card__title">{title}</h2>
          {isSaved ? (
            <button className="card__button" onClick={handelikeClick}>
              <img className="card__icon_close" src={close} alt="delete" />
            </button>
          ) : (
            <button className="card__button" onClick={handelikeClick}>
              <img className="card__icon" src={likeButtonImage} alt="heart" />
            </button>
          )}
        </div>
        <div className="card__length">{duration}</div>
      </div>
    </div>
  );
}

export default MoviesCard;
