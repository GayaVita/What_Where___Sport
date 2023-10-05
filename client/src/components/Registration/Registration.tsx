import { IInput, IRegProps } from '../../types/types';
import './reg.style.css';
import type { MouseEvent, ChangeEvent } from 'react';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Registration({ setUser }: IRegProps): JSX.Element {
  
  const defaultInput = {
    login: '',
    email: '',
    password: '',
  };

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
  const navigate = useNavigate();

  const signInButton = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    console.log(e.target);
    const response = await fetch('http://localhost:3000/user/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(inputs),
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
    if (result.msg) {
      setUser(result.login);
      setMessage(result.msg);
      setUser((prev) => ({ ...prev, login: result.login }));
      setTimeout(() => {
        navigate('/');
      }, 4000);
    } else {
      setMessage(result.err);
    }
  };

    //LOGIN
  const signUpButton = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    console.log(e.target);
    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(inputs),
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
    if (result.msg) {
      setMessage(result.msg);
      setUser((prev) => ({ ...prev, login: result.login }));
      setTimeout(() => {
        navigate('/');
      }, 4000);
    } else {
      setMessage(result.err);
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
