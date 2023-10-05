import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './eventCard.module.css';

export type EventCardType = {
  // location_title: string;
  location_address: string;
  location_district: string;
  // location_price: number | '';
  location_photo: string;
  location_category: string;
  // location_contact: string;
  profile_id_loc: number | '';
  // coordinateX: string;
  // coordinateY: string;
};

export default function EventCard(): JSX.Element {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EventCardType>({
    // location_title: '',
    location_address: '',
    location_district: '',
    // location_price: '',
    location_photo: '',
    location_category: '',
    // location_contact: '',
    profile_id_loc: '',
    // coordinateX: '',
    // coordinateY: '',
  });
  const clickRejectHandler = ():void => {
  console.log('test')
  }
const clickConnectHandler = ():void => {
   console.log('test')
}

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const clickHandler = (): void => {
    navigate('/userLC/location_form/activity_form');
  };

  return (
    <div className={styles.location_form__wrapper}>
      <div className={styles.form_location}>
        <div className={styles.location_form__inputs}>
          <input
            className={styles.location_form__input}
            name="location_district"
            type="text"
            placeholder="район"
            value={formData?.location_district}
            onChange={changeHandler}
          />

          <input
            className={styles.location_form__input}
            name="location_address"
            type="text"
            placeholder="адрес места активности"
            value={formData?.location_address}
            onChange={changeHandler}
          />

          <input
            className={styles.location_form__input}
            name="location_category"
            type="text"
            placeholder="обьект активности ...например корт"
            value={formData?.location_category}
            onChange={changeHandler}
          />

                 </div>
        <div className={styles.location_user_event}>
          <p>user_name</p>
        <Button
          variant="secondary"
          type="button"
          className={styles.profile_form__button}
          onClick={clickRejectHandler}
        >
          Отклонить
        </Button>
        <Button
          variant="secondary"
          type="button"
          className={styles.profile_form__button}
          onClick={clickConnectHandler}
        >
          Связаться
        </Button>
        </div>

      </div>
    </div>
  );
}