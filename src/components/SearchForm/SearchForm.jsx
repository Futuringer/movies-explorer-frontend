import React from 'react';
import { useEffect, useState, useCallback } from 'react';

import { moviesFilterer } from '../../utils/helpers';
import search from '../../images/search.svg';
import CheckBox from '../CheckBox/CheckBox';
import moviesApi from '../../utils/api/MoviesApi';

import styles from './SearchForm.scss';

function SearchForm({
  setMovies,
  setMoviesToShow,
  movies,
  isSavedMovies,
  setSavedMovies,
  setFetchMoviesError,
}) {
  const [shortFilmChecked, setShortFilmChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [emptyError, setEmptyError] = useState(false);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const resetErrors = useCallback(() => {
    setEmptyError(false);
  }, []);

  const searchMovies = () => {
    if (isSavedMovies) {
      searchInSavedMovies();
    } else {
      moviesApi
        .getAllMovies()
        .then((res) => {
          const filteredMovies = moviesFilterer(res, searchValue, shortFilmChecked);
          localStorage.setItem('searchValue', searchValue);
          setMovies(res);
          setMoviesToShow(filteredMovies);
          localStorage.setItem('moviesToShow', JSON.stringify(filteredMovies));
          localStorage.setItem('movies', JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
          setFetchMoviesError(true); //сообщение об ошибке
        });
    }
  };

  const searchInSavedMovies = () => {
    setSavedMovies(moviesFilterer(movies, searchValue, shortFilmChecked));
  };

  const handleMoviesSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (searchValue?.length) {
      searchMovies();
    } else {
      setEmptyError(true);
      return false;
    }
  };

  useEffect(() => {
    if (isSavedMovies) {
    } else {
      const filteredMovies = moviesFilterer(movies, searchValue, shortFilmChecked);
      localStorage.setItem('moviesToShow', JSON.stringify(filteredMovies));
      setMoviesToShow(filteredMovies);
    }
  }, [shortFilmChecked]);

  const handleShortFilmChange = () => {
    localStorage.setItem('shortFilmChecked', JSON.stringify(!shortFilmChecked));
    //console.log(shortFilmChecked, JSON.parse(localStorage.getItem('shortFilmChecked')));
    setShortFilmChecked(!shortFilmChecked);
  };

  useEffect(() => {
    document.addEventListener('click', resetErrors);
    return () => {
      document.removeEventListener('click', resetErrors);
    };
  }, [resetErrors]);

  useEffect(() => {
    if (!isSavedMovies) {
      localStorage.getItem('searchValue') && setSearchValue(localStorage.getItem('searchValue'));
      setMoviesToShow(JSON.parse(localStorage.getItem('moviesToShow')));
    }
    console.log('UE', JSON.parse(localStorage.getItem('shortFilmChecked')));
    setShortFilmChecked(JSON.parse(localStorage.getItem('shortFilmChecked')));
  }, []);

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleMoviesSearch}>
          {emptyError && <div className="search-form__error">Нужно ввести ключевое слово</div>}
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
            value={searchValue}
            onChange={handleSearch}
          />
          <button className="search-form__button" onClick={handleMoviesSearch}>
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
