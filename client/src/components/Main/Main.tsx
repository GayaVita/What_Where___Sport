import React from 'react';
import CarouselComponent from './components/CarouselComponent';
import { Col, Container, Row, Image } from 'react-bootstrap';

export default function Main() {
  return (
    <>
      <Container >
        <Row>
          <Col >
            <Image src="../../../public/img/main/photo1.jpg" 
                   fluid />
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
