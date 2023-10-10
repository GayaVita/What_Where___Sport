import { IInput } from '../../types/types';
import '../../components/Registration/reg.style.css'
import type {ChangeEvent } from 'react';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserRegister, fetchUserLogin } from '../../store/userSlice/sliceUser';
import { useNavigate } from 'react-router-dom';

export default function Registration(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector((store) => store.user);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState<IInput>({
    login: '',
    email: '',
    password: '',
  });
  // const [message, setMessage] = useState('');

  const changeAccessButton = (): void => {
    setShow(!show);
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // console.log(inputs);
  };

  //REGISTRATION

  const signInButton = async (): Promise<void> => {
    const resultAction = await dispatch(fetchUserRegister(inputs));
    if (fetchUserRegister.fulfilled.match(resultAction)) {
      navigate('/');
    }
  };

  //LOGIN
  const signUpButton = async (): Promise<void> => {
    const resultAction = await dispatch(fetchUserLogin(inputs));
    if (fetchUserLogin.fulfilled.match(resultAction)) {
      navigate('/');
    }
  };

  return (
    <div className='authContainer' >
      <div className={show ? 'regContainer right-panel-active' : 'regContainer'} id="container">
        <div className="form-container sign-up-container">
          <form className='refForm' action="#">
            <h1 className='greetingText'>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social a">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social a">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social a">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span className='spanClass'>or use your email for registration</span>
            <input 
              onChange={inputHandler}
              name="login"
              value={inputs.login}
              type="text"
              placeholder="Login"
              className='regInput'
            />
            <input 
              onChange={inputHandler}
              name="email"
              value={inputs.email}
              type="email"
              placeholder="Email"
              className='regInput'
            />
            <input 
              onChange={inputHandler}
              name="password"
              value={inputs.password}
              type="password"
              placeholder="Password"
              className='regInput'
            />
            <button className='regBtn' type="button" onClick={signInButton}>
              Sign Up
            </button>
            {error && <p className='inputText' style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className='refForm' action="#">
            <h1 className='greetingText'>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social a">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social a">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social a">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span className='spanClass'>or use your account</span>
            <input 
              onChange={inputHandler}
              name="email"
              value={inputs.email}
              type="email"
              placeholder="Email"
              className='regInput'
            />
            <input 
              onChange={inputHandler}
              name="password"
              value={inputs.password}
              type="password"
              placeholder="Password"
              className='regInput'
            />
            <a href="#" className='a'>Forgot your password?</a>
            <button className='regBtn' type="button" onClick={signUpButton}>
              Sign In
            </button>
            {error && <p className='inputText' style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='greetingText'>Welcome Back!</h1>
              <p className='inputText'>To keep connected with us please login with your personal info</p>
              <button type="button" onClick={changeAccessButton} className="ghost regBtn" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='greetingText'>Hello, Friend!</h1>
              <p className='inputText'>Enter your personal details and start journey with us</p>
              <button type="button" onClick={changeAccessButton} className="ghost regBtn" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
