import React from 'react';

import styles from './ProfileCard.module.css'
import { useAppSelector } from '../../store/hooks';

export default function ProfileCard() {
  const { profile } = useAppSelector((store) => store.profile);
  
  return (
    <div className={styles.profile_card__wrapper}>
      <div className={styles.profile_card__content}>
        <img className={styles.profile_card__avatar} src='https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg' alt='avatar' />
        <h5 className={styles.profile_card__username}>{profile?.user_name}</h5>
        <p className={styles.profile_card__userabout}><span>Обо мне: </span>{profile?.user_about}</p>
        <p className={styles.profile_card__userabout}><span>Возраст: </span>{profile?.user_age}</p>
        <p className={styles.profile_card__userabout}><span>TG: </span><a href={profile?.user_tg}>{profile?.user_tg}</a></p>
        <p className={styles.profile_card__userabout}><span>Телефон: </span>{profile?.user_mobile}</p>
        <button>Редактировать</button>
      </div>
    </div>
  )
}