import React, { useContext, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useState } from 'react';
import ProfileInput from '../ProfileInput/ProfileInput';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import styles from './ProfileForm.scss';

function ProfileForm({ setActualUser, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const [initialData, setInitialData] = useState(currentUser);
  const [apiError, setApiError] = useState('');

  const initialValues = { name: currentUser.name, email: currentUser.email };
  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^(?![\s.]+$)[a-zA-Zа-яёА-ЯЁ \-\s]*$/, 'Недопустимый символ')
      .min(2, 'Не меньше двух символов')
      .nullable(),
    email: Yup.string().email('Некорректный email').required('Это поле обязательно').nullable(),
  });
  const formik = useFormik({
    initialValues: { initialValues },
    validationSchema: ValidationSchema,
    onSubmit: () => {
      const { name, email } = values;
      api
        .register({ name: name, email: email })
        .then((res) => {
          setLoggedIn(true);
          navigate(LINKS.MOVIES);
          return api.login({ email: email, password: password });
        })
        .catch((err) => {
          setApiError(err?.split('"')[1]);
        });
    },
  });
  const { values, handleSubmit, errors, setFieldValue, touched } = formik;

  useEffect(() => {
    setFieldValue('name', initialValues.name);
    setFieldValue('email', initialValues.email);
  }, [currentUser]);

  const resetErrors = useCallback(() => {
    setApiError('');
  }, []);

  useEffect(() => {
    document.addEventListener('click', resetErrors);
    return () => {
      document.removeEventListener('click', resetErrors);
    };
  }, [resetErrors]);

  return (
    <form className="profile-form">
      <div>
        <h1 className="profile-form__header">Привет, {currentUser.name}</h1>
        <div className="profile-form__inputs-container">
          <div className="profile-form__input-container">
            <ProfileInput
              name="name"
              label="Имя"
              placeholder="Введите имя"
              value={values.name || ''}
              required
              setValue={setFieldValue}
              type="text"
              error={errors.name}
            ></ProfileInput>
          </div>
          <hr className="profile-form__separator" />
          <div className="profile-form__input-container">
            <ProfileInput
              name="email"
              label="E-mail"
              placeholder="Введите E-mail"
              value={values.email || ''}
              required
              setValue={setFieldValue}
              type="email"
              error={errors.email}
            ></ProfileInput>
          </div>
        </div>
      </div>
      <div className="profile-form__entrance-buttons">
        {apiError && <div className="profile-form__form-error">{apiError}</div>}
        <button
          disabled={
            !formik.isValid ||
            (values.name === initialValues.name && values.email === initialValues.email)
          }
          className="profile-form__entrance-button"
        >
          Редактировать
        </button>
        <button
          className="profile-form__entrance-button profile-form__entrance-button_type_leave"
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
