import React from 'react';
import './navbar.style.css';
import { Link } from 'react-router-dom';
import { IPropsLogin } from '../../types/types';

export default function Navbar({ user }: IPropsLogin) {
  console.log(user.login);

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
                <a className="nav-link" href="/locations">
                  Локации
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/logout">
                  Выйти
                </a>
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
                <a className="nav-link" href="/locations">
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
