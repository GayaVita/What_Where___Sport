import React from 'react';
import CarouselComponent from './components/CarouselComponent';
import SliderComponent from './components/SliderComponent';
import { Col, Container, Row } from 'react-bootstrap';

export default function Main() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <SliderComponent />
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
