import React from 'react';
import { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import HeaderLogo from './../HeaderLogo/HeaderLogo.jsx';
import EntranceButtons from '../EntranceButtons/EntranceButtons';

import styles from './SignUpForm.scss';

function SignUpForm() {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const setValue = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  return (
    <form className="sign-up-form">
      <div className="sign-up-form__logo">
        <HeaderLogo />
      </div>
      <h1 className="sign-up-form__header">Добро пожаловать!</h1>
      <div className="sign-up-form__inputs-container">
        <div className="sign-up-form__input-container">
          <FormInput
            name="name"
            label="Имя"
            placeholder="Введите имя"
            value={values.name}
            required
            setValue={setValue}
            type="text"
          ></FormInput>
        </div>
        <div className="sign-up-form__input-container">
          <FormInput
            name="email"
            label="E-mail"
            placeholder="Введите E-mail"
            value={values.email}
            required
            setValue={setValue}
            type="email"
            //error='Что-то пошло не так...'
          ></FormInput>
        </div>
        <div className="sign-up-form__input-container">
          <FormInput
            name="password"
            label="Пароль"
            placeholder="Введите пароль"
            value={values.password}
            required
            setValue={setValue}
            type="password"
            error="Что-то пошло не так..."
          ></FormInput>
        </div>
      </div>
      <div className="sign-up-form__entrance-buttons">
        <EntranceButtons
          mainText="Зарегистрироваться"
          descText="Уже зарегистрированы?"
          secondaryText="Войти"
          link="/signin"
        ></EntranceButtons>
      </div>
    </form>
  );
}

export default SignUpForm;
