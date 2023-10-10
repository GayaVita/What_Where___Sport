import React from 'react';

import styles from './ProfileCard.module.css'
import { useAppSelector } from '../../store/hooks';

export default function ProfileCard() {
  const { profile } = useAppSelector((store) => store.profile);
  
  const { user } = useAppSelector((store) => store.user);
  return (
    <div className={styles.profile_card__wrapper}>
      <div className={styles.profile_card__content}>
        <img className={styles.profile_card__avatar} src='https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg' alt='avatar' />
        <h5 className={styles.profile_card__username}>{user?.Profile?.user_name}</h5>
        <p className={styles.profile_card__userabout}><span>Обо мне: </span>{user?.Profile?.user_about}</p>
        <p className={styles.profile_card__userabout}><span>Возраст: </span>{user?.Profile?.user_age}</p>
        <p className={styles.profile_card__userabout}><span>TG: </span><a href={user?.Profile?.user_tg}>{user?.Profile?.user_tg}</a></p>
        <p className={styles.profile_card__userabout}><span>Телефон: </span>{user?.Profile?.user_mobile}</p>
      </div>
    </div>
  )
}