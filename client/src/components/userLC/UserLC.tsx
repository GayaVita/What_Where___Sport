import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './userLC.module.css';

export default function UserLC(): JSX.Element {
  return (
    <div className={styles.userLC_container}>
      <div className={styles.left_form__wrapper}>
        <ul className={styles.left_form__list}>
          <li className={styles.left_form__link}>
            <div className={styles.left_form__svg}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                <path d="M0 0h24v24h-24z" fill="none" />
              </svg>
            </div>
            <Link to="/userLC/profile_form">Профиль</Link>
          </li>
          <li className={styles.left_form__link}>
            <Link to="/userLC/location_form">1 Создать локацию</Link>
          </li>
          <li className={styles.left_form__link}>
            <Link to="/userLC/activity_form">2 Создать активность</Link>
          </li>
          <li className={styles.left_form__link}>
            <Link to="/userLC/events">Отклики</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right_form__wrapper}>
        <Outlet />
      </div>
    </div>
  );
}
