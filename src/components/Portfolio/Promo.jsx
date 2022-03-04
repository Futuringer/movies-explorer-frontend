import React from 'react';
import cn from 'classnames';
import { ReactComponent as ArrowUpSvg } from '../../images/promo.svg';

import styles from './Promo.scss';

function Promo() {
  return (
    <div className="promo">
      <section className="intro">
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <ArrowUpSvg className="intro__image" title="Abstract ovals"></ArrowUpSvg>
      </section>
      <section className="section about">
        <h2 className="section__header">О проекте</h2>
        <div className="about__description-container">
          <div>
            <h3 className="section__subheader about__subheader">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="section__text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
          <div>
            <h3 className="section__subheader about__subheader">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="section__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </div>
        </div>
        <grid className="about__stages-bar">
          <div className="about__stage about__stage_filled">1 неделя</div>
          <div className="about__stage">4 недели</div>
          <div>
            <p className="about__stage-text">Back-end</p>
          </div>
          <div>
            <p className="about__stage-text">Front-end</p>
          </div>
        </grid>
      </section >
      <section className="section technologies">
        <h2 className="section__header">Технологии</h2>
        <h3 className='technologies__subheader'>7 технологий</h3>
      </section>
    </div>
  );
}

export default Promo;
