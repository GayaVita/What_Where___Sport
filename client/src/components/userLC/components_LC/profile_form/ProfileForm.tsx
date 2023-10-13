import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import styles from './profileForm.module.css';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
// import { fetchProfile } from '../../../../store/profileSlice/asyncThunk';
import ProfileCard from '../../../ProfileCard/ProfileCard';
import { IUser } from '../../../../store/userSlice/types';
import { updateUser } from '../../../../store/userSlice/thunkUser';

// export type ProfileFormType = {
//   user_name: string;
//   user_about: string;
//   user_age?: number | '';
//   user_tg: string;
//   user_mobile: string;
//   user_id?: number;
// };
import { Card, FloatingLabel, Form } from 'react-bootstrap';

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
  // const { profile, error } = useAppSelector((store) => store.profile);
  const { user, error } = useAppSelector((store) => store.user);
  // console.log('profile', profile);
  const [formData, setFormData] = useState<IUser['Profile']>({
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
    if (formData) {
      dispatch(updateUser(formData));
    }
  };

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
    <>
      {user?.Profile ? (
        <ProfileCard />
      ) : (
        <Card className={styles.profile_form__wrapper}>
          <div className={styles.form}>
            <Card.Title className={styles.profile_form__title}>
              Заполните профиль
            </Card.Title>
              <Form.Control
                className={styles.profile_form__input}
                name="user_name"
                type="text"
                placeholder="Имя"
                value={formData?.user_name}
                onChange={changeHandler}
              />

              <Form.Control as="textarea" rows={2}
                className={styles.profile_form__input}
                name="user_about"
                type="text"
                placeholder="О себе ..."
                value={formData?.user_about}
                onChange={changeHandler}
              />

              <Form.Control
                className={styles.profile_form__input}
                name="user_age"
                type="text"
                placeholder="Возраст"
                value={formData?.user_age}
                onChange={changeHandler}
              />

              <Form.Control
                className={styles.profile_form__input}
                name="user_tg"
                type="text"
                placeholder="Ссылка на Telegram"
                value={formData?.user_tg}
                onChange={changeHandler}
              />

              <Form.Control
                className={styles.profile_form__input}
                name="user_mobile"
                type="text"
                placeholder="Телефон"
                value={formData?.user_mobile}
                onChange={changeHandler}
              />
            
            {error && <p className={styles.error}>{error}</p>}
            <Button
              variant="secondary"
              type="button"
              className={styles.profile_form__button}
              onClick={submitProfileHandler}
            >
              Сохранить
            </Button>
            </div>
    
        </Card>
      )}
    </>
  );
}


{/* <div className={styles.profile_form__wrapper}>
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
                placeholder="Возраст"
                value={formData?.user_age}
                onChange={changeHandler}
              />

              <input
                className={styles.profile_form__input}
                name="user_tg"
                type="text"
                placeholder="Ссылка на Telegram"
                value={formData?.user_tg}
                onChange={changeHandler}
              />

              <input
                className={styles.profile_form__input}
                name="user_mobile"
                type="text"
                placeholder="Телефон"
                value={formData?.user_mobile}
                onChange={changeHandler}
              />
            
            {error && <p className={styles.error}>{error}</p>}
            <Button
              variant="secondary"
              type="button"
              className={styles.profile_form__button}
              onClick={submitProfileHandler}
            >
              Создать профиль
            </Button>
            </div>
          </div>
        </div> */}