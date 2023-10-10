import React from 'react';
import styles from './SliderComponent.module.css'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function SliderComponent() {
  return (
    <div className={styles.main_slider}>
      <MDBCarousel dealy={1000} fade >
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src="../../../../img/main/ping-pong.png" alt="ping-pong"
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src="../../../../img/main/on-the-basketball-court.jpg" alt="basketball"
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src="../../../../img/main/tennis.jpg" alt="tennis"
        />
         <MDBCarouselItem
          className='w-100 d-block'
          itemId={4}
          src="../../../../img/main/ping-pong2.png" alt="ping-pong2"
        />
      </MDBCarousel>
    </div>
  );
}