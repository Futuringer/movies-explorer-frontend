import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Preloader from '../../components/Preloader/Preloader';

import styles from './Movies.scss';

function Movies({ loggedIn, openPopup, data, ...restProps }) {
  return (
    <Layout loggedIn={loggedIn} openPopup={openPopup}>
      <div className="movies__container">
        <SearchForm></SearchForm>
        {data ? <MoviesCardList {...restProps}></MoviesCardList> : <Preloader />}
      </div>
    </Layout>
  );
}

export default Movies;
