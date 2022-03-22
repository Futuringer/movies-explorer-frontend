import { useEffect } from 'react';

import api from '../../utils/api/MainApi';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import styles from './SavedMovies.scss';

function SavedMovies({ loggedIn, openPopup, setSavedMovies, ...restProps }) {
  useEffect(() => {
    api.getMovies().then((res)=>{
      setSavedMovies(res.data);
    });
  }, []);

  return (
    <Layout loggedIn={loggedIn} openPopup={openPopup}>
      <div className="movies__container">
        <SearchForm></SearchForm>
        <MoviesCardList isSavedMovies setSavedMovies={setSavedMovies} {...restProps}></MoviesCardList>
      </div>
    </Layout>
  );
}

export default SavedMovies;
