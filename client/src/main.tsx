import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import './index.css';
import Locations from './components/Locations/Locations';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<<<<<<< HEAD
  <BrowserRouter>
    <App />
  </BrowserRouter>,
=======
  <Provider store={store}>
    <App />
    <Locations />
  </Provider>
>>>>>>> Locations
);
