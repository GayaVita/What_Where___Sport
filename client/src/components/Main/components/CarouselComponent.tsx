import React from 'react';
import styles from './CarouselComponent.module.css';
import Marquee from "react-fast-marquee";

interface caruselItem {
  img: string,
  href: string,
}

export default function CarouselComponent() {

  // const caruselCases: caruselItem[] = [
  //   {img: '../public/img/carousel/lokomotiv-dinamo.png', href: 'https://tickets.fcdm.ru/'}, 
  //   {img: '../public/tennis.jpg', href: 'https://unsplash.com/s/photos/sport-mate'}, 
  //   {img: '../public/oboi-1.jpg', href: 'https://splidejs.com/premium/'},
  //   {img: '../public/background1.jpg', href: 'https://splidejs.com/premium/'},
  // ];

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
      {/* <div className={styles.carusel}>
      <Marquee  speed={30} pauseOnHover>
        {caruselCases.map((item: caruselItem) => (
        <a href={item.href} className={styles.slide} key={item.img}>
            <img src={item.img} className={styles.carusel_img}/>
        </a>
        ))}
      </Marquee>
      </div>
    </> */}
