import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import styles from './profileForm.module.css';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchProfile } from '../../../../store/profileSlice/asyncThunk';

export type ProfileFormType = {
  user_name: string;
  user_about: string;
  user_age?: number | '';
  user_tg: string;
  user_mobile: string;
  user_id?: number;
};

export default function ProfileForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((store) => store.profile);
  console.log('profile', profile);
  const [formData, setFormData] = useState<ProfileFormType>({
    user_name: '',
    user_about: '',
    user_age: '',
    user_tg: '',
    user_mobile: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitProfileHandler = () => {
    dispatch(fetchProfile(formData));
  }

  // const formSubmitHandler = (): void => {
  //   fetch('http://localhost:3002/', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(formData)
  //   })
  // }

  return (
    <div className={styles.profile_form__wrapper}>
      <div className={styles.form}>
        <div className={styles.profile_form__inputs}>
          <input
            className={styles.profile_form__input}
            name="user_name"
            type="text"
            placeholder="Имя"
            value={formData?.user_name}
            onChange={changeHandler}
          />

          <input
            className={styles.profile_form__input}
            name="user_about"
            type="text"
            placeholder="О себе ..."
            value={formData?.user_about}
            onChange={changeHandler}
          />

          <input
            className={styles.profile_form__input}
            name="user_age"
            type="text"
            placeholder="Возраст ..."
            value={formData?.user_age}
            onChange={changeHandler}
          />

          <input
            className={styles.profile_form__input}
            name="user_tg"
            type="text"
            placeholder="ссылка на Telegram ..."
            value={formData?.user_tg}
            onChange={changeHandler}
          />

          <input
            className={styles.profile_form__input}
            name="user_mobile"
            type="text"
            placeholder="телефон"
            value={formData?.user_mobile}
            onChange={changeHandler}
          />
        </div>

        <Button variant="secondary" type="button" className={styles.profile_form__button} onClick={submitProfileHandler}>
          Отправить
        </Button>
      </div>
    </div>
  );
}
