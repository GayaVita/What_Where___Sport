import { IInput, IRegProps } from '../../types/types';
import './reg.style.css';
import type { MouseEvent, ChangeEvent } from 'react';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserRegister,fetchUserLogin } from '../../store/userSlice/sliceUser';
import { useNavigate } from 'react-router-dom';

export default function Registration(): JSX.Element {
  
  const defaultInput = {
    login: '',
    email: '',
    password: '',
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  // const { error } = useAppSelector(store => store.userSlice);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState<IInput>(defaultInput);
  const [message, setMessage] = useState('');

  const changeAccessButton = (): void => {
    setShow(!show);
    console.log('buttttton');
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  //REGISTRATION

  const signInButton = async (): Promise<void> => {   
    const resultAction = await dispatch(fetchUserRegister(inputs))
    if (fetchUserRegister.fulfilled.match(resultAction)) {
      navigate('/')
    }
  };

    //LOGIN
  const signUpButton = async (): Promise<void> => {
    const resultAction = await dispatch(fetchUserLogin(inputs))
    if (fetchUserLogin.fulfilled.match(resultAction)) {
      navigate('/')
    }
   
  };

  return (
    <div className={show ? 'container right-panel-active' : 'container'} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            onChange={inputHandler}
            name="login"
            value={inputs.login}
            type="text"
            placeholder="Login"
          />
          <input
            onChange={inputHandler}
            name="email"
            value={inputs.email}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={inputHandler}
            name="password"
            value={inputs.password}
            type="password"
            placeholder="Password"
          />
          <button type="button" onClick={signInButton}>
            Sign Up
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <span>or use your account</span>
          <input
            onChange={inputHandler}
            name="email"
            value={inputs.email}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={inputHandler}
            name="password"
            value={inputs.password}
            type="password"
            placeholder="Password"
          />
          <a href="#">Forgot your password?</a>
          <button type="button" onClick={signUpButton}>
            Sign In
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button type="button" onClick={changeAccessButton} className="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button type="button" onClick={changeAccessButton} className="ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
