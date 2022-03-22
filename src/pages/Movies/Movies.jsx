import Layout from '../../components/Layout/Layout';
import React, { useEffect, Suspense, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import moviesApi from '../../utils/api/MoviesApi';

import styles from './Movies.scss';

function Movies({
  movies,
  loggedIn,
  openPopup,
  setMovies,
  //setFetchMoviesError,
  setMoviesToShow,
  ...restProps
}) {
  const MoviesCardList = React.lazy(() => import('../../components/MoviesCardList/MoviesCardList'));
  const [fetchMoviesError, setFetchMoviesError] = useState('');

  return (
      <Layout loggedIn={loggedIn} openPopup={openPopup}>
        <div className="movies__container">
          <SearchForm
            movies={movies}
            setMoviesToShow={setMoviesToShow}
            setMovies={setMovies}
            setFetchMoviesError={setFetchMoviesError}
          ></SearchForm>
            <Suspense fallback={<Preloader />}>
              {<MoviesCardList movies={movies} setMoviesToShow={setMoviesToShow} fetchMoviesError={fetchMoviesError} {...restProps} />}
            </Suspense>
        </div>
      </Layout>
    
  );
}

export default Movies;
