import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserLogout } from '../../store/userSlice/thunkUser';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import styles from './navbar.module.css';

export default function NavBar(): JSX.Element {
  const { user } = useAppSelector((store) => store.user);
  // console.log('user', user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutHandler = async (): Promise<void> => {
    await dispatch(fetchUserLogout());
    navigate('/');
  };

  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container className={styles.navbar}>
            {/* <Link className={styles.navlink} to="/">
              Что?Где?Спорт!
            </Link> */}
            <Link to="/">
              <img 
                    src='../../../public/photos/logo-RogerSoviet.png' 
                    alt='Что?Где?Спорт!' 
                    className={styles.logo} />
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={styles.navlink}
            >
              <Offcanvas.Header aria-controls={`offcanvasNavbar-expand-${expand}`} closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className={styles.navlink}
                >
                  Меню
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {user?.login ? (
                    <>
                        <Link className={styles.navlink} to="/activities">
                          Активности
                        </Link>
                        <Link className={styles.navlink} to="/locations">
                          Аренда локаций
                        </Link>
                        <Link className={styles.navlink} to="/userLC">
                          Личный кабинет
                        </Link>
                        <Link className={styles.navlink} onClick={logoutHandler} to="/">
                          Выйти
                        </Link>
                   
                      <div className={styles.profile_card_nav__content}>
                        {user?.Profile && (
                          <Link to="/userLC">
                            <img
                              className={styles.profile_card_nav__avatar}
                              src={`/public/photos/${user?.Profile?.user_photo}`}
                              alt="avatar"
                            />
                          </Link>
                        )}

                        <div className={styles.profile_card_nav__user}>
                          {user?.Profile?.user_name}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* <Link className={styles.navlink} to="/activities">Активности</Link> */}
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
}
