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
  location_photo: string;

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
    location_photo: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clickHandler = async () => {
    const resultActivity = await dispatch(fetchLocationLC(formData));
    if (fetchActivity.fulfilled.match(resultActivity)) {
      navigate('/userLC/events/');
    }
  };

  return (
    <div className={styles.activity_form__wrapper}>
      <form className={styles.form_activity}>
        <h5 className={styles.location_form_title}>Создай активность!</h5>
        <select className={styles.activity_form__location__select} name="choice">
          <option value="first">location title</option>
          <option value="second" selected>location title</option>
          <option value="third">location title</option>
        </select>
        
        <div className={styles.activity_form__inputs}>
          <input
            className={styles.activity_form__input}
            name="activity_type"
            type="text"
            placeholder="вид спорта или активности..."
            value={formData?.activity_type}
            onChange={changeHandler}
          />

          <input
            className={styles.activity_form__input}
            name="activity_date"
            type="text"
            placeholder="дата (день.месяц.год))"
            value={formData?.activity_date}
            onChange={changeHandler}
          />

          <input
            className={styles.activity_form__input}
            name="activity_time"
            type="text"
            placeholder="время (например 18:30)"
            value={formData?.activity_time}
            onChange={changeHandler}
          />

          <textarea
            className={styles.activity_form__textarea}
            name="activity_message"
            type="text"
            placeholder="опиши свою активность (например: привет, ищу напарника для тенниса...)"
            value={formData?.activity_message}
            onChange={changeHandler}
          />
          </div>

          <label>Приложите фото вашей локации
          <input
            className={styles.activity_form__photo}
            id="location_photo"
            name="location_photo"
            type="file"
            placeholder="фото локации"
            value={formData?.location_photo}
            onChange={changeHandler}
            ></input>
          </label>

        <Button variant="secondary" type="button" className={styles.profile_form__button}  onClick={clickHandler}>
          Cоздать твою Aктивность!
        </Button>
      </form>
    </div>
  );
}