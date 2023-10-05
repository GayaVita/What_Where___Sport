import React from 'react';
import { IPropsLogin, IPropsNavbar } from '../../types/types';

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
          <a className="navbar-brand" href="/">
            Главная
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Активности
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Локации
                </a>
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
          <a className="navbar-brand" href="#">
            Главная
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Активности
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Локации
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/access">
                  Войти
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
