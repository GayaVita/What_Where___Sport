import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './locationForm.module.css';

export type LocationFormType = {
  // location_title: string;
  location_address: string;
  location_district: string;
  // location_price: number | '';
  location_photo: string;
  location_category: string;
  // location_contact: string;
  profile_id_loc: number | '';
  coordinateX: string;
  coordinateY: string;
};

export default function LocationForm(): JSX.Element {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LocationFormType>({
    // location_title: '',
    location_address: '',
    location_district: '',
    // location_price: '',
    location_photo: '',
    location_category: '',
    // location_contact: '',
    profile_id_loc: '',
    coordinateX: '',
    coordinateY: '',
  });

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

          <input
            className={styles.location_form__input}
            id="location_photo"
            name="location_photo"
            type="file"
            placeholder="фото локации"
            value={formData?.location_photo}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.yandex_map}>YANDEX КАРТА с ПОИСКОМ</div>

        <Button
          variant="secondary"
          type="button"
          className={styles.profile_form__button}
          onClick={clickHandler}
        >
          Создать место для Активности!
        </Button>
      </div>
    </div>
  );
}
