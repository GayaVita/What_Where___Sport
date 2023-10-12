import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './ProfileCard.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IUser } from '../../store/userSlice/types';
import { addImageToProfile } from '../../store/userSlice/thunkUser';
import { Button } from 'react-bootstrap';

export default function ProfileCard() {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((store) => store.profile);
  const { user } = useAppSelector((store) => store.user);
  const [image, setImage] = useState<IUser['Profile']>({
    id: Number(user?.Profile?.id),
    user_photo: user?.Profile?.user_photo,
  });

  const changeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    setImage({ ...image, user_photo: e.target.files[0] });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image) {
      dispatch(addImageToProfile(image));
    }
  };

  return (
    <div className={styles.profile_card__wrapper}>
      <div className={styles.profile_card__content}>
        <img
          className={styles.profile_card__avatar}
          src={`/public/photos/${user?.Profile?.user_photo}`}
          alt="avatar"
        />
        {/* <form encType='multipart/form-data' onSubmit={submitHandler} className={styles.profile_card_avatar__form}>
          <input  type='file' name='user_photo' onChange={changeFileHandler} />
          <button type='submit'>Добавить фото</button>
        </form> */}
        <form
          encType="multipart/form-data"
          onSubmit={submitHandler}
          className={styles.profile_card_avatar__form}
        >
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label styles={{ fontSize: '16px' }}>добавить фото профиля</Form.Label>
            <Form.Control type="file" name="user_photo" onChange={changeFileHandler} />
            <Button variant="secondary" type="submit" className={styles.profile_form__button}>
            сохранить фото
            </Button>
          </Form.Group>
        </form>

        <h5 className={styles.profile_card__username}>{user?.Profile?.user_name}</h5>
        <p className={styles.profile_card__userabout}>
          <span>Обо мне: </span>
          {user?.Profile?.user_about}
        </p>
        <p className={styles.profile_card__userabout}>
          <span>Возраст: </span>
          {user?.Profile?.user_age}
        </p>
        <p className={styles.profile_card__userabout}>
          <span>TG: </span>
          <a href={user?.Profile?.user_tg}>{user?.Profile?.user_tg}</a>
        </p>
        <p className={styles.profile_card__userabout}>
          <span>Телефон: </span>
          {user?.Profile?.user_mobile}
        </p>
        {/* Условно отображаем кнопку "Редактировать" или форму редактирования */}
        {/* {isEditing ? (
          <EditProfile
            profile={user?.Profile || {}}
            onSave={saveUpdatedProfile}
            onCancel={cancelEditing}
          />
        ) : (
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
        )} */}
      </div>
    </div>
  );
}
