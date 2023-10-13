import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './locationForm.module.css';
import { useAppDispatch } from '../../../../store/hooks';
import { fetchLocationLC } from '../../../../store/locationLCSlice/asyncThunk';
import Map from '../../../Map/Map';
import { LocationLCFormType } from '../../../../store/locationLCSlice/types';

export default function LocationForm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<LocationLCFormType>({
    location_address: '',
    location_title: '',
    location_district: '',
    coordinateX: '',
    coordinateY: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const clickHandler = async () => {
    const resultLocation = await dispatch(fetchLocationLC(formData));
    if (fetchLocationLC.fulfilled.match(resultLocation)) {
      navigate('/userLC/activity_form/');
    }
  };

  return (
    <div className={styles.location_form__wrapper}>
      <div className={styles.form_location}>
        <div className={styles.location_form__inputs}>

          <h5 className={styles.location_form_title}>Создай локацию для спорта!</h5>
          <p className={styles.location_form_p}>Выбери место на карте</p>

        <div className={styles.yandex_map}>
          <Map formData={formData} setFormData={setFormData} />
          
        </div>
          <input
            className={styles.location_form__input}
            name="location_district"
            type="text"
            placeholder="город"
            value={formData?.location_district}
            onChange={changeHandler}
            disabled
          />

          <input
            className={styles.location_form__input}
            name="location_address"
            type="text"
            placeholder="адрес места"
            value={formData?.location_address}
            onChange={changeHandler}
            disabled
          />

          <input
            className={styles.location_form__input}
            name="location_title"
            type="text"
            placeholder="обьект (например: спорткомплекс `Динамо`) "
            value={formData?.location_title}
            onChange={changeHandler}
          />
        {/* </div> */}
        {/* <div > */}
          <Button
            variant="secondary"
            type="button"
            className={styles.profile_form__button}
            onClick={clickHandler}
          >
            Создать Локацию!
          </Button>
        </div>
      </div>
    </div>
  );
}
