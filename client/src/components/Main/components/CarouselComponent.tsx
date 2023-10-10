import React from 'react';
import styles from './CarouselComponent.module.css';
import Marquee from "react-fast-marquee";

interface caruselItem {
  img: string,
  href: string,
}

export default function CarouselComponent() {
  
  const caruselCases: caruselItem[] = [
    {img: '../public/img/carousel/lokomotiv-dinamo.png', href: 'https://tickets.fcdm.ru/'}, 
    {img: '../public/tennis.jpg', href: 'https://unsplash.com/s/photos/sport-mate'}, 
    {img: '../public/oboi-1.jpg', href: 'https://splidejs.com/premium/'},
    {img: '../public/background1.jpg', href: 'https://splidejs.com/premium/'},
  ];

  return (
    <>
      <div className={styles.carusel}>
      <Marquee  speed={60} pauseOnHover>
        {caruselCases.map((item: caruselItem) => (
        <a href={item.href} className={styles.slide} key={item.img}>
            <img src={item.img} className={styles.carusel_img}/>
        </a>
        ))}
      </Marquee>
      </div>
    </>
  )
}