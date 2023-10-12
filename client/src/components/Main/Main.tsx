import React from 'react';
import CarouselComponent from './components/CarouselComponent';
import SliderComponent from './components/SliderComponent';
import { Col, Container, Row } from 'react-bootstrap';

export default function Main() {
  return (
    <>
      <Container >
        <Row>
          <Col>
            <img src="../../../public/img/main/people-getting-ready-tennis-game-winter-time.jpg" alt="" style={{width: "calc(100%-10px)", height: "50vh"}} />
            {/* <SliderComponent /> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <CarouselComponent />
          </Col>
        </Row>
      </Container>
    </>
  )
}
