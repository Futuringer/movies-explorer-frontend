import React from 'react';
import { useState } from 'react';

import search from '../../images/search.svg';
import CheckBox from '../CheckBox/CheckBox';

import styles from './SearchForm.scss';

function SearchForm() {
  const [shortFilmChecked, setShortFilmChecked] = useState(false);
  const handleShortFilmChange = () => {
    setShortFilmChecked(!shortFilmChecked);
  };

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__button" type="submit">
            <img src={search} alt="Search" className="search-form__image" />
          </button>
        </form>
        <div className="search-form__short-film">
          <p className="search-form__text">Короткометражки</p>
          <CheckBox
            shortFilmChecked={shortFilmChecked}
            handleShortFilmChange={handleShortFilmChange}
          />
        </div>
      </div>
      <h1 className="search-form__line"></h1>
    </div>
  );
}

export default SearchForm;
