import React, { useEffect, useState } from 'react';
import { IPropsLogin, IPropsNavbar } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserLogout } from '../../store/userSlice/thunkUser';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
// import styles from './navbar.style.css'

export default function NavBar(): JSX.Element {
  const { user } = useAppSelector((store) => store.user);
  console.log(user);
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
     <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Sport Mate</Navbar.Brand>
          <Nav className="me-auto">
          {user?.login ? (
            <>
              <Nav.Link href="/activities">Активности</Nav.Link>
              <Nav.Link href="/locations">Локации</Nav.Link>
              <Nav.Link href="/userLC">Личный кабинет</Nav.Link>
              <Nav.Link onClick={logoutHandler}>Выйти
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/activities">Активности</Nav.Link>
              <Nav.Link href="/locations">Локации</Nav.Link>
              <Nav.Link href="/access">Войти</Nav.Link>
          </>
          )}
          </Nav>
        </Container>
      </Navbar>
    </>

    // <Nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   {user.login ? (
    //     <div className="container-fluid">
    //       <Link className="navbar-brand" to="/">
    //         Главная
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="activities">
    //               Активности
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/locations">
    //               Локации
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/userLC">
    //               Личный кабинет
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <button className="nav-link" onClick={logoutHandler}>
    //               Выйти
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="container-fluid">
    //       <Link className="navbar-brand" to="/">
    //         Главная
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="#">
    //               Активности
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/locations">
    //               Локации
    //             </Link>
    //           </li>
    //           {/* <li className="nav-item">
    //             <a className="nav-link" href="/userLC">
    //               Личный кабинет
    //             </a>
    //           </li> */}
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/access">
    //               Войти
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   )}
    // </Nav>
  );
}
