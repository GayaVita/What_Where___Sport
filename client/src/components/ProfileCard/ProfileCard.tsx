import React, { useState } from 'react';
import styles from './ProfileCard.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IUser } from '../../store/userSlice/types';
import { addImageToProfile } from '../../store/userSlice/thunkUser';
import { Form, Button, Card, ListGroup } from 'react-bootstrap';

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
      <Card className={styles.profile_card__wrapper} bg="transparent" >
        <Card.Img className={styles.profile_card__avatar}
        variant="top" 
        src={`/public/photos/${user?.Profile?.user_photo}`} 
        alt="avatar"/>
         <Form
          encType="multipart/form-data"
          onSubmit={submitHandler}
          className={styles.profile_card_avatar__form} >
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label styles={{ fontSize: '16px' }}>Добавить фото профиля</Form.Label>
            <Form.Control type="file" name="user_photo" onChange={changeFileHandler} />
            <Button variant="secondary" type="submit" className={styles.profile_form__button}>
            Сохранить
            </Button>
          </Form.Group>
        </Form>
        <Card.Body>
          <Card.Title className={styles.profile_card__username}>{user?.Profile?.user_name}</Card.Title>
        <ListGroup className={styles.profile_card__userabout}>
          <ListGroup.Item className={styles.profile_card__userabout}>  
            Обо мне:
            {' '}{user?.Profile?.user_about}
          </ListGroup.Item>
          <ListGroup.Item>
            Возраст:
            {' '}{user?.Profile?.user_age}
          </ListGroup.Item>
          <ListGroup.Item>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/></svg>
           {' '}{user?.Profile?.user_mobile}
          </ListGroup.Item>
          <ListGroup.Item>
             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="28px" height="28px"><path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"/><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"/></svg>
           {' '}<a href={user?.Profile?.user_tg} className={styles.profile_card_tg_link}>{user?.Profile?.user_tg}</a>
          </ListGroup.Item>
        </ListGroup>
        </Card.Body>
      </Card>
  );
}

    // <div className={styles.profile_card__wrapper}>
    //   <div className={styles.profile_card__content}>
    //     <img
    //       className={styles.profile_card__avatar}
    //       src={`/public/photos/${user?.Profile?.user_photo}`}
    //       alt="avatar"
    //     />
    //     {/* <form encType='multipart/form-data' onSubmit={submitHandler} className={styles.profile_card_avatar__form}>
    //       <input  type='file' name='user_photo' onChange={changeFileHandler} />
    //       <button type='submit'>Добавить фото</button>
    //     </form> */}
    //     <form
    //       encType="multipart/form-data"
    //       onSubmit={submitHandler}
    //       className={styles.profile_card_avatar__form}
    //     >
    //       <Form.Group controlId="formFile" className="mb-3">
    //         <Form.Label styles={{ fontSize: '16px' }}>добавить фото профиля</Form.Label>
    //         <Form.Control type="file" name="user_photo" onChange={changeFileHandler} />
    //         <Button variant="secondary" type="submit" className={styles.profile_form__button}>
    //         сохранить фото
    //         </Button>
    //       </Form.Group>
    //     </form>



    //     <h5 className={styles.profile_card__username}>{user?.Profile?.user_name}</h5>
    //     <p className={styles.profile_card__userabout}>
    //       <span>Обо мне: </span>
    //       {user?.Profile?.user_about}
    //     </p>
    //     <p className={styles.profile_card__userabout}>
    //       <span>Возраст: </span>
    //       {user?.Profile?.user_age}
    //     </p>
    //     <p className={styles.profile_card__userabout}>
    //       <span>TG: </span>
    //       <a href={user?.Profile?.user_tg}>{user?.Profile?.user_tg}</a>
    //     </p>
    //     <p className={styles.profile_card__userabout}>
    //       <span>Телефон: </span>
    //       {user?.Profile?.user_mobile}
    //     </p>
    //     {/* Условно отображаем кнопку "Редактировать" или форму редактирования */}
    //     {/* {isEditing ? (
    //       <EditProfile
    //         profile={user?.Profile || {}}
    //         onSave={saveUpdatedProfile}
    //         onCancel={cancelEditing}
    //       />
    //     ) : (
    //       <button onClick={() => setIsEditing(true)}>Редактировать</button>
    //     )} */}
    //   </div>
    // </div>