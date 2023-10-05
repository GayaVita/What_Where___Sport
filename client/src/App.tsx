import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import UserLC from './components/userLC/UserLC';
import Registration from './components/Registration/Registration';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App(): JSX.Element {
  const [user, setUser] = useState({ login: '' });
  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/userLC" element={<UserLC />} />
        <Route path="/access" element={<Registration setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
