import React from 'react';
import { useEffect, useState } from 'react';

import { moviesFilterer } from '../../utils/helpers';
import search from '../../images/search.svg';
import CheckBox from '../CheckBox/CheckBox';
import moviesApi from '../../utils/api/MoviesApi';

import styles from './SearchForm.scss';

function SearchForm({ setMovies, setMoviesToShow, movies }) {
  const [shortFilmChecked, setShortFilmChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const handleMoviesSearch = (e) => {
    e.preventDefault();
    moviesApi
      .getAllMovies()
      .then((res) => {
        setMovies(res);
        setMoviesToShow(moviesFilterer(res, searchValue, shortFilmChecked));
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch((err) => {
        //setFetchMoviesError(true)
      });
  };

  const handleShortFilmChange = () => {
    setShortFilmChecked(!shortFilmChecked);
  };

  useEffect(() => {
    //чтобы не рсабатывал кода вызывается из savedMovies
    if (setMoviesToShow && movies) {
      setMoviesToShow(movies);
    }
  }, []);

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleMoviesSearch}>
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
            onChange={handleSearch}
          />
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
