import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import UserLC from './components/userLC/UserLC';
import Registration from './components/Registration/Registration';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import ProfileForm from './components/userLC/components_LC/profile_form/ProfileForm';
import ActivityForm from './components/userLC/components_LC/activity_form/ActivityForm';
import LocationForm from './components/userLC/components_LC/location_form/LocationForm';
import EventCard from './components/userLC/components_LC/activity_events/EventCard';

function App(): JSX.Element {
  const [user, setUser] = useState({ login: '' });
  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/userLC" element={<UserLC />} />
      </Routes>
    </div>
  );
}

export default App;
