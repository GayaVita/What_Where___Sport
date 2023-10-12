import React from 'react';
// import styles from './SliderComponent.module.css'
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';
import { Carousel } from 'react-bootstrap';

export default function SliderComponent() {
  return (
    <Carousel data-bs-theme="ligth">
      <Carousel.Item interval={4000}>
        <img 
          className="d-block w-100"
          src="../../../../img/main/tennis.jpg"
          alt=""
        />
        {/* <Carousel.Caption>
          <h5 className={styles.main_text}>Ты одинокий спортсмен и тебе не с кем поиграть?</h5>
          <p className={styles.main_text}>Наш сервис поможет тебе найти партнера для спортивной игры</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="../../../../img/main/123.png"
          alt=""
        />
        {/* <Carousel.Caption> */}
          {/* <h5>Ты одинокий спортсмен и тебе не с кем поиграть?</h5>
          <p>Наш сервис поможет тебе найти партнера для спортивной игры</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="../../../../img/main/boks.JPG" 
          alt="boks"
        /> 
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item className={styles.slider}>
        <img
          className="d-block w-100"
          src="../../../../img/main/ping-pong2.png"
          alt="ping-pong2"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>

      // <MDBCarousel dealy={1000} fade>
      //   <MDBCarouselItem
      //     className='w-100 d-block'
      //     itemId={1}
      //     src="../../../../img/main/ping-pong.png" alt="ping-pong"
      //   />
      //   <MDBCarouselItem
      //     className='w-100 d-block'
      //     itemId={2}
      //     src="../../../../img/main/on-the-basketball-court.jpg" alt="basketball"
      //   />
      //   <MDBCarouselItem
      //     className='w-100 d-block'
      //     itemId={3}
      //     src="../../../../img/main/tennis.jpg" alt="tennis"
      //   />
      //    <MDBCarouselItem
      //     className='w-100 d-block'
      //     itemId={4}
      //     src="../../../../img/main/ping-pong2.png" alt="ping-pong2"
      //   />
      // </MDBCarousel>
  );
}