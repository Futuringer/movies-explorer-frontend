import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LINKS } from '../../utils/constants';

import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import { cards, savedCards } from '../../utils/data';

import styles from './App.css';

function App() {
  const [menuPopupIsOpen, setMenuPopupIsOpen] = useState(false);

  const handleCloseMenuPopup = () => {
    setMenuPopupIsOpen(false);
  };

  const handleOpenMenuPopup = () => {
    setMenuPopupIsOpen(true);
  };

  return (
    <>
      <Routes>
        <Route exact path={'*'} element={<NotFound />}></Route>
        <Route exact path={LINKS.MAIN} element={<Main openPopup={handleOpenMenuPopup}/>}></Route>
        <Route path={LINKS.MOVIES} element={<Movies loggedIn cards={cards} openPopup={handleOpenMenuPopup} data/>}></Route>
        <Route
          path={LINKS.SAVED_MOVIES}
          element={<SavedMovies loggedIn cards={savedCards} isSaved openPopup={handleOpenMenuPopup}/>}
        ></Route>
        <Route path={LINKS.SIGN_UP} element={<Register />}></Route>
        <Route path={LINKS.SIGN_IN} element={<Login />}></Route>
        <Route path={LINKS.PROFILE} element={<Profile loggedIn openPopup={handleOpenMenuPopup}/>}></Route>
      </Routes>
      <NavigationPopup isOpen={menuPopupIsOpen} closeMenu={handleCloseMenuPopup}></NavigationPopup>
    </>
  );
}

export default App;
