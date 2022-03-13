import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import styles from './SavedMovies.scss';

function SavedMovies({ loggedIn, openPopup, ...restProps }) {
  return (
    <Layout loggedIn={loggedIn} openPopup={openPopup}>
      <div className="movies__container">
        <SearchForm></SearchForm>
        <MoviesCardList {...restProps}></MoviesCardList>
      </div>
    </Layout>
  );
}

export default SavedMovies;
