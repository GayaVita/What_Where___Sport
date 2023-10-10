import React from 'react';
import styles from './Main.module.css';
import CarouselComponent from './components/CarouselComponent';
import SliderComponent from './components/SliderComponent';


export default function Main() {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_div}>
          <div className={styles.main_title}>
            <div className={styles.main_text}>Ты одинокий спортсмен и тебе не с кем поиграть? Наш сервис поможет тебе найти </div>
            <div className={styles.main_text_second}> партнера для спортивной игры </div>
          </div>
            <div className={styles.main_photo}>
              <div className={styles.vertical_gradient}></div>
              <div className={styles.horizontal_gradient_top}></div>
              <div className={styles.horizontal_gradient_bottom}></div>
              {/* <img src="../../../img/main/ping-pong.png" alt="ping-pong" className={styles.main_img} />
              <img src="../../../img/main/on-the-basketball-court.jpg" alt="basketball" className={styles.main_img2} />  */}
              <SliderComponent />
            </div>
          </div>
        </div>
      <CarouselComponent />
    </>
  )
}
