import React from 'react';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import Header from '../Header/Header';

import styles from './Layout.scss';

function Layout() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__content">
        <Outlet />
      </div>
      <div className="layout__footer">Footer</div>
    </div>
  );
}

export default Layout;
