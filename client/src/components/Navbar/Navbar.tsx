import React, { useEffect, useState } from 'react';
import { IPropsLogin, IPropsNavbar } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserLogout } from '../../store/userSlice/thunkUser';
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import styles from './navbar.module.css'

export default function NavBar(): JSX.Element {
  const { user } = useAppSelector((store) => store.user);
  console.log('user', user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
// export default function NavBar({ user, setUser }: IPropsNavbar): JSX.Element {
//   console.log(user.login);

  const logoutHandler = async (): Promise<void> => {
    await dispatch(fetchUserLogout());
    navigate('/');
  }

  return (
    <>
    {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container className={styles.navbar} >
            <Link className={styles.navlink} to='/'>Sport Mate</Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={styles.navlink}
            >
              <Offcanvas.Header aria-controls={`offcanvasNavbar-expand-${expand}`} closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={styles.navlink}>
                  Меню
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {user?.login ? ( 
                    <>
                      <Link className={styles.navlink} to="/activities">Активности</Link>
                      <Link className={styles.navlink} to="/locations">Локации</Link>
                      <Link className={styles.navlink} to="/userLC">Личный кабинет</Link>
                      <Link className={styles.navlink} onClick={logoutHandler} to='/'>Выйти</Link>
                    </> 
                  ) : (
                    <>
                      <Link className={styles.navlink} to="/activities">Активности</Link>
                      <Link className={styles.navlink} to="/locations">Локации</Link>
                      <Link className={styles.navlink} to="/access">Войти</Link>
                    </>) 
                }
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
     {/* <Navbar className={styles.navbar} bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand className={styles.navlink} href="/">Sport Mate</Navbar.Brand>
          <Nav className={styles.nav}>
          {user?.login ? (
            <>
              <div>
                <Link className={styles.navlink} to="/activities">Активности </Link>
              </div>
              
              <div>
              <br />
              <Link className={styles.navlink} to="/locations">Локации</Link>
              </div>
              
              <Link className={styles.navlink} to="/userLC">Личный кабинет</Link>
              <Link className={styles.navlink} onClick={logoutHandler} to='/'>Выйти</Link>
            </>
          ) : (
            <>
              <Link className={styles.navlink} to="/activities">Активности</Link>
              <Link className={styles.navlink} to="/locations">Локации</Link>
              <Link className={styles.navlink} to="/access">Войти</Link>
          </>
          )}
          </Nav>
        </Container>
      </Navbar> */}
    // </>
  // );
}
