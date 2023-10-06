import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserLogout } from '../../store/userSlice/thunkUser';
import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user } = useAppSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate()

  const logoutHandler = async (): Promise<void> => {   
    await dispatch(fetchUserLogout())
      navigate('/')
    }

  // const logoutHandler = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/user/logout', {
  //       credentials: 'include',
  //     });
  //     const res = await response.json();
  //     setUser((pre) => ({ ...pre, login: res.login, authLogin: false }));
  //   } catch (error) {
  //     console.log('Не смогли войти', error);
  //   }
  // };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        {user?.login ? (
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
                  <button className="nav-link">
                    Активности
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Локации</button>
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
    </div>
  );
}
function dispatch(arg0: AsyncThunkAction<void, void, { state?: unknown; dispatch?: Dispatch<AnyAction> | undefined; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
  throw new Error('Function not implemented.');
}

