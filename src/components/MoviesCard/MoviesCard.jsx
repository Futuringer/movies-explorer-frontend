import React from 'react';
import { useState, useEffect } from 'react';

import heart from '../../images/heart.svg';
import heartFilled from '../../images/heart-filled.svg';
import close from '../../images/close.svg';
import { durationParser, checkIfSaved, getMovieId } from '../../utils/helpers';
import api from '../../utils/api/MainApi';

import styles from './MoviesCard.scss';

function MoviesCard({ movie, isSaved, savedMovies, setSavedMovies }) {
  const [isLiked, setIsLiked] = useState(false);
  const likeButtonImage = isLiked ? heartFilled : heart;

  const handelikeClick = () => {
    if (isLiked) {
      api.deleteMovie(getMovieId(movie.id, savedMovies));
      setIsLiked(false);
    } else {
      setIsLiked(true);
      api.saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
    }
  };

  const handleDeleteClick = () => {
    api.deleteMovie(movie._id);
    setSavedMovies(savedMovies.filter((item) => item._id !== movie._id));
    console.log(1,savedMovies,2, movie);
  };

  useEffect(() => {
    if (!isSaved && checkIfSaved(movie, savedMovies)) {
      setIsLiked(true);
    }
    
  }, []);

  return (
    <div className="card">
      <img
        className="card__image"
        src={isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
        alt="1"
      />
      <div className="card__description">
        <div className="card__title-container">
          <h2 className="card__title">{movie.nameRU}</h2>
          {isSaved ? (
            <button className="card__button" onClick={handleDeleteClick}>
              <img className="card__icon_close" src={close} alt="delete" />
            </button>
          ) : (
            <button className="card__button" onClick={handelikeClick}>
              <img className="card__icon" src={likeButtonImage} alt="heart" />
            </button>
          )}
        </div>
        <div className="card__length">{durationParser(movie.duration)}</div>
      </div>
    </div>
  );
}

export default MoviesCard;
