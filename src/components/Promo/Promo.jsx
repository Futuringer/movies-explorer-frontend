import React from 'react';
import { ReactComponent as ArrowUpSvg } from '../../images/promo.svg';

import styles from './Promo.scss';

function Promo() {
  return (
    <div className="promo">
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <ArrowUpSvg className="promo__image" title="Abstract ovals"></ArrowUpSvg>
    </div>
  );
}

export default Promo;
