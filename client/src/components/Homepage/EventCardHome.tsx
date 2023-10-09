import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './eventCard.module.css';

export type EventCardHomeType = {
  location_title: string;
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

export default function EventCardHome(): JSX.Element {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EventCardHomeType>({
    location_title: '',
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

  const clickContactHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    navigate('/userLC/location_form/entry_form');
  };
  const clickRejectHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    navigate('/userLC/location_form/entry_form');
  };
  const clickDeleteHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    navigate('/userLC/location_form/activity_form');
  };

  return (
    <div className={styles.event_form__wrapper}>

      <div className={styles.event_form__card}>
        <Button
            variant="secondary"
            type="button"
            className={styles.profile_form_delete__button}
            onClick={clickDeleteHandler}
          >
            Отменить!
        </Button>

        <div className={styles.event_form__table}>
              <div className={styles.event_form__tableMain}>
              <p className={styles.event_title}>location_title</p>
              <p className={styles.event_city}>location_city</p>
              <p className={styles.event_address}>location_address</p>
              {/* <p className={styles.event_type}>activity_type</p> */}
          </div>

            <div className={styles.event_form__tableDate}>
              <p className={styles.event_date}>activity_date</p>
              <p className={styles.event_time}>activity_time</p>
          </div>
        </div>



    <div className={styles.all_event_users}>

        <div className={styles.event_user_container}>
          <p className={styles.event_user}>user_name#1</p>

          <Button
            variant="secondary"
            type="button"
            className={styles.profile_form_contact__button}
            onClick={clickContactHandler}
          >
            Связаться
          </Button>

          <Button
            variant="secondary"
            type="button"
            className={styles.profile_form_reject__button}
            onClick={clickRejectHandler}
          >
            Отклонить
          </Button>
        </div>


        <div className={styles.event_user_container}>
          <p className={styles.event_user}>user_name#2</p>

          <Button
            variant="secondary"
            type="button"
            className={styles.profile_form_contact__button}
            onClick={clickContactHandler}
          >
            Связаться
          </Button>

          <Button
            variant="secondary"
            type="button"
            className={styles.profile_form_reject__button}
            onClick={clickRejectHandler}
          >
            Отклонить
          </Button>
        </div>
      
    </div>


      </div>
    </div>
  );
}
