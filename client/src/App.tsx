import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import elbrusLogo from './assets/elbrus.svg';
import './App.css';
import UserLC from './components/userLC/UserLC';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/userLC" element={<UserLC />} />
      </Routes>
    </div>
  );
}

export default App;
