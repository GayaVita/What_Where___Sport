import React from 'react';
import styles from './CarouselComponent.module.css';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

export default function CarouselComponent() {
  return (
    <>
      <Marquee className={styles.carusel} speed={30} pauseOnHover>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
            Забронируй классную локацию
           </div>
        </Link>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
            Ищу напарника для игры в большой теннис
           </div>
        </Link>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
            Билеты на «PWL 6. Наследники Олимпа» - Москва, 3 ноября   
           </div>
        </Link>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
           Всего лишь 1000 руб. за аренду спортивного зала
           </div>
        </Link>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
            Билеты на матч Локомотив - Динамо 21 октября 
           </div>
        </Link>
      </Marquee>
    </>
  )
}
