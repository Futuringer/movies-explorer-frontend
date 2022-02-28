import React from 'react';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import Header from '../Header/Header';

import styles from './Layout.scss';

function Layout() {
  return (
    <div className='Layout'>
      <div className='Layout__header'><Header /></div>
      <div className='Layout__content'>
        <Outlet />
      </div>
      <div className='Layout__footer'>Footer</div>
    </div>
  );
}

export default Layout;
