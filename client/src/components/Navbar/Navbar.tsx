import React from 'react';
import { IPropsLogin, IPropsNavbar } from '../../types/types';
import { Link } from 'react-router-dom';

export default function Navbar({ user, setUser }: IPropsNavbar) {
  console.log(user.login);

  const logoutHandler = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/logout', {
        credentials: 'include'
      })
      const res = await response.json()
      setUser((pre)=> ({...pre, login: res.login, authLogin: false}))
    } catch (error) {
      console.log('Не смогли войти', error);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {user.login ? (
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Главная
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="activities">
                  Активности
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/locations">
                  Локации
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userLC">
                  Личный кабинет
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={logoutHandler}>
                  Выйти
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Главная
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Активности
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/locations">
                  Локации
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/userLC">
                  Личный кабинет
                </a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/access">
                  Войти
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
