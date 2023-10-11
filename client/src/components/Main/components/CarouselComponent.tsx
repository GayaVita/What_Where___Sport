import React from 'react';
import styles from './CarouselComponent.module.css';
import Marquee from "react-fast-marquee";
import { useAppSelector } from '../../../store/hooks';

interface caruselItem {
  img: string,
  href: string,
}

export default function CarouselComponent() {

  const { locations } = useAppSelector((store) => store.locations);

  return (
    <>
     <div className={styles.carusel}>
      <Marquee  speed={25} pauseOnHover>
        <a href="/locations" >
           <div className={styles.card_carusel}>
            Забронируй классную локацию
           </div>
        </a>
        <a href="/locations" >
           <div className={styles.card_carusel}>
            Ищу напарника для игры в большой теннис
           </div>
        </a>
        <a href="/locations" >
           <div className={styles.card_carusel}>
           Всего лишь 1000 руб. за аренду спортивного зала
           </div>
        </a>
        <a href="/locations" >
           <div className={styles.card_carusel}>
            Билеты на матч Локомотив - Динамо 21 октября 
           </div>
        </a>
      </Marquee>
      </div>
    </>
  )
}

