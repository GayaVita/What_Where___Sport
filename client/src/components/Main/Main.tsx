import React from 'react';
import styles from './Main.module.css';
import { Button, Carousel } from 'react-bootstrap';
import CarouselComponent from './components/CarouselComponent';
import SliderComponent from './components/SliderComponent';


export default function Main() {

  return (
    <>
      <section className={styles.main}>
        <div className={styles.main_div}>
          <div className={styles.main_title}>
            <div className={styles.main_text}>Найди себе партнера для спорта или игрока в команду</div>
            {/* <Button variant="light" className={styles.main_button}>Войти</Button> */}
          </div>
            <div className={styles.main_photo}>
              <div className={styles.vertical_gradient}></div>
              <div className={styles.horizontal_gradient}></div>
              <img src="../../../img/main/image-two-tennis-people.jpg" alt="" className={styles.main_img} />
              {/* <SliderComponent /> */}
            </div>
          </div>
        </section>
      <CarouselComponent />
    </>
  )
}
