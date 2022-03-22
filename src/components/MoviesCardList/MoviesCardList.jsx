import React from 'react';
import { useState, useEffect } from 'react';

import useViewport from '../../utils/hooks/useViewport';
import MoviesCard from '../MoviesCard/MoviesCard';
import { durationParser } from '../../utils/helpers';

import styles from './MoviesCardList.scss';

function MoviesCardList({
  movies,
  moviesToShow,
  isSavedMovies,
  fetchMoviesError,
  setMoviesToShow,
  ...restProps
}) {
  let [initialNumberOfCards, cardsToLoad] = useViewport();
  const [cardsToShow, setCardsToShow] = useState(initialNumberOfCards);

  const handleMoreClick = () => {
    setCardsToShow(cardsToShow + (cardsToLoad - ((cardsToShow + cardsToLoad) % cardsToLoad))); //если поменяли экран то сначала догружаем до ровной строки
  };

  return (
    <div className="cards">
      {fetchMoviesError ? (
        <div className="cards__no-films">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз
        </div>
      ) : moviesToShow?.length ? (
        <div className="cards__list">
          {moviesToShow?.slice(0, cardsToShow)?.map((movie, id) => (
            <MoviesCard
              key={id}
              movie={movie}
              {...restProps}
            ></MoviesCard>
          ))}
        </div>
      ) : isSavedMovies ? (
        <div className="cards__no-films">У вас еще нет сохраненных фильмов</div>
      ) : (
        <div className="cards__no-films">Фильмы не найдены</div>
      )}

      {moviesToShow?.length > cardsToShow && (
        <button className="cards__button" onClick={handleMoreClick}>
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
