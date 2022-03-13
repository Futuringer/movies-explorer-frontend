import React from 'react';
import { useState } from 'react';

import useViewport from '../../utils/hooks/useViewport';
import MoviesCard from '../MoviesCard/MoviesCard';

import styles from './MoviesCardList.scss';

function MoviesCardList({cards, ...restProps}) {
  let { rows } = useViewport();
  const [cardsToShow, setCardsToShow] = useState(rows);

  const handleMoreClick = () => {
    setCardsToShow(cardsToShow + (rows - ((cardsToShow + rows) % rows))); //если поменяли экран то сначала догружаем до ровной строки
  };

  return (
    <div className="cards">
      {cards?.length ? (
        <div className="cards__list">
          {cards.slice(0, cardsToShow).map((card) => (
            <MoviesCard
              key={card.id}
              image={card.image}
              title={card.title}
              duration={card.duration}
              {...restProps}
            ></MoviesCard>
          ))}
        </div>
      ) : (
        <div className="cards__no-films">Фильмы не найдены</div>
      )}
      {cards?.length > cardsToShow && (
        <button className="cards__button" onClick={handleMoreClick}>
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
