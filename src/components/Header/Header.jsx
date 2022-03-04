import React from 'react';
import cn from 'classnames';

import styles from './Header.scss';

function Header({ children }) {
  return (
    <div className='header'>
      <div className='header__icon'></div>
      <div className='header__buttons-container'>
        <button className='header__button'>Регистрация</button>
        <button className='header__button' autoFocus>Войти</button>
      </div>
    </div>
  );
}

export default Header;
