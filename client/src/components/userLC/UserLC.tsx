import React, { useState } from 'react';
import { Button, Col, Collapse, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import styles from './userLC.module.css';
import 'boxicons';

export default function UserLC(): JSX.Element {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs="auto" sm="auto" md="auto"className={styles.left_form__list}>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <i className='bx bx-menu lg'></i>
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                    <Link className={styles.left_form__link} to="/userLC/profile_form">Профиль</Link>
                    <br />
                    <Link className={styles.left_form__link} to="/userLC/location_form">Создать локацию</Link>
                    <br />
                    <Link className={styles.left_form__link} to="/userLC/activity_form">Создать активность</Link>
                    <br />
                    <Link className={styles.left_form__link} to="/userLC/events">Отклики</Link>
                </div>
              </Collapse>
            </Nav>
          </Col>
          <Col className={styles.right_form__wrapper}>
            <Outlet />
          </Col>
        </Row>
    </Container>
    </>
  );
}
