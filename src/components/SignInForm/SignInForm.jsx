import React from 'react';
import { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import HeaderLogo from '../HeaderLogo/HeaderLogo.jsx';
import EntranceButtons from '../EntranceButtons/EntranceButtons';

import styles from './SignInForm.scss';

function SignInForm() {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const setValue = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  return (
    <form className="sign-in-form">
      <div className="sign-in-form__logo">
        <HeaderLogo />
      </div>
      <h1 className="sign-in-form__header">Рады видеть!</h1>
      <div className="sign-in-form__inputs-container">
        <div className="sign-in-form__input-container">
          <FormInput
            name="email"
            label="E-mail"
            placeholder="Введите E-mail"
            value={values.email}
            required
            setValue={setValue}
            type="email"
          ></FormInput>
        </div>
        <div className="sign-in-form__input-container">
          <FormInput
            name="password"
            label="Пароль"
            placeholder="Введите пароль"
            value={values.password}
            required
            setValue={setValue}
            type="password"
          ></FormInput>
        </div>
      </div>
      <div className="sign-in-form__entrance-buttons">
        <EntranceButtons
          mainText="Войти"
          descText="Ещё не зарегистрированы?"
          secondaryText="Регистрация"
          link="/signup"
        ></EntranceButtons>
      </div>
    </form>
  );
}

export default SignInForm;
