import React from 'react';
import styles from './CarouselComponent.module.css';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';

interface caruselItem {
  img: string,
  href: string,
}

export default function CarouselComponent() {

  const { locations } = useAppSelector((store) => store.locations);

  return (
      <Marquee speed={30} pauseOnHover className={styles.carusel}>
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
  )
}
