import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './activityForm.module.css';
import { ActivityType } from '../../../../store/activitySlice/types';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchActivity } from '../../../../store/activitySlice/asyncThunk';
import { getAllUserLocations } from '../../../../store/locationLCSlice/asyncThunk';

export default function ActivityForm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<ActivityType>({
    activity_type: '',
    activity_date: '',
    activity_time: '',
    activity_message: '',
    location_id: '',
  });

  const { locations } = useAppSelector((store) => store.locationLC);
  // console.log('locations', locations);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const changeTextAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultActivity = await dispatch(fetchActivity(formData));
    if (fetchActivity.fulfilled.match(resultActivity)) {
      navigate('/userLC/events');
    }
  };

  React.useEffect(() => {
    dispatch(getAllUserLocations());
  }, []);

  return (
    <div className={styles.activity_form__wrapper}>
      <form className={styles.form_activity} onSubmit={submitHandler}>
        <h5 className={styles.location_form_title}>Создай активность!</h5>

        <select
          className={styles.activity_formlocationselect}
          name="location_id"
          onChange={changeSelectHandler}
        >
          <option disabled selected>
            Выберите локацию
          </option>
          {locations &&
            locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.location_title}
              </option>
            ))}
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
            type="date"
            placeholder="дата (день.месяц.год))"
            value={formData?.activity_date}
            onChange={changeHandler}
          />

          <input
            className={styles.activity_form__input}
            name="activity_time"
            type="time"
            placeholder="время (например 18:30)"
            value={formData?.activity_time}
            onChange={changeHandler}
          />

          <textarea
            className={styles.activity_form__textarea}
            name="activity_message"
            placeholder="опиши свою активность (например: привет, ищу напарника для тенниса...)"
            value={formData?.activity_message}
            onChange={changeTextAreaHandler}
          />
        </div>
{/* 
        <label>
          Приложите фото вашей локации
          <input
            className={styles.activity_form__photo}
            id="location_photo"
            name="location_photo"
            type="file"
            placeholder="фото локации"
            value={formData?.location_photo}
            onChange={changeHandler}
          ></input>
        </label> */}

        <Button
          variant="secondary"
          type="submit"
          className={styles.profile_form__button}
        >
          Cоздать твою Aктивность!
        </Button>
      </form>
    </div>
  );
}
