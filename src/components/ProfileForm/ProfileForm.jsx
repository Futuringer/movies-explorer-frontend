import React from 'react';

import { useState } from 'react';
import ProfileInput from '../ProfileInput/ProfileInput';

import styles from './ProfileForm.scss';

function ProfileForm() {
  const [values, setValues] = useState({ name: 'Виталий', email: 'pochta@yandex.ru' });
  const setValue = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  return (
    <form className="profile-form">
      <div>
      <h1 className="profile-form__header">Привет, Виталий!</h1>
      <div className="profile-form__inputs-container">
        <div className="profile-form__input-container">
          <ProfileInput
            name="name"
            label="Имя"
            placeholder="Введите имя"
            value={values.name}
            required
            setValue={setValue}
            type="text"
          ></ProfileInput>
        </div>
        <hr className="profile-form__separator" />
        <div className="profile-form__input-container">
          <ProfileInput
            name="email"
            label="E-mail"
            placeholder="Введите E-mail"
            value={values.email}
            required
            setValue={setValue}
            type="email"
            //error='Что-то пошло не так...'
          ></ProfileInput>
        </div>
      </div>
      </div>
      <div className="profile-form__entrance-buttons">
        <button className="profile-form__entrance-button">Редактировать</button>
        <button className="profile-form__entrance-button profile-form__entrance-button_type_leave">Выйти из аккаунта</button>
      </div>
    </form>
  );
}

export default ProfileForm;
