import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './activityForm.module.css';

export type ActivityFormType = {
  profile_id: number | '';
  activity_type: string;
  activity_date: string;
  activity_time: string;
  activity_message: string;
  location_id: number | '';

};

export default function ActivityForm(): JSX.Element {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ActivityFormType>({
    profile_id: '',
    activity_type: '',
    activity_date: '',
    activity_time: '',
    activity_message: '',
    location_id: '',
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

  return (
    <div className={styles.activity_form__wrapper}>
      <div className={styles.form_activity}>
        <div className={styles.activity_form__location}>
          Иноформация о Локации из БД (location_id)
        </div>
        <div className={styles.activity_form__inputs}>
          <input
            className={styles.activity_form__input}
            name="activity_type"
            type="text"
            placeholder="вид вашего спорта или активность..."
            value={formData?.activity_type}
            onChange={changeHandler}
          />

          <input
            className={styles.activity_form__input}
            name="activity_date"
            type="text"
            placeholder="дата в формате ХХ.ХХ.ХХХХ (день.месяц.год))"
            value={formData?.activity_date}
            onChange={changeHandler}
          />

          <input
            className={styles.activity_form__input}
            name="activity_time"
            type="text"
            placeholder="время в формате XX:XX, например 18:30"
            value={formData?.activity_time}
            onChange={changeHandler}
          />

          <input
            className={styles.activity_form__input}
            name="activity_message"
            type="text"
            placeholder="опиши свою активность"
            value={formData?.activity_message}
            onChange={changeHandler}
          />
     
        </div>

        <Button variant="secondary" type="button" className={styles.profile_form__button}>
          Cоздать твою Aктивность!
        </Button>
      </div>
    </div>
  );
}