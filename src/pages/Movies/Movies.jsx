import Layout from '../../components/Layout/Layout';
import React, { useEffect, Suspense } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import moviesApi from '../../utils/api/MoviesApi';

import styles from './Movies.scss';

function Movies({
  movies,
  loggedIn,
  openPopup,
  setMovies,
  setFetchMoviesError,
  setMoviesToShow,
  ...restProps
}) {
  const MoviesCardList = React.lazy(() => import('../../components/MoviesCardList/MoviesCardList'));

  return (
    <Suspense fallback={<Preloader />}>
      <Layout loggedIn={loggedIn} openPopup={openPopup}>
        <div className="movies__container">
          <SearchForm
            movies={movies}
            setMoviesToShow={setMoviesToShow}
            setMovies={setMovies}
            setFetchMoviesError={setFetchMoviesError}
          ></SearchForm>
          {<MoviesCardList movies={movies} setMoviesToShow={setMoviesToShow} {...restProps} />}
        </div>
      </Layout>
    </Suspense>
  );
}

export default Movies;
