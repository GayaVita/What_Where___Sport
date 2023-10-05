import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UserLC from './components/userLC/UserLC';
import ProfileForm from './components/userLC/components_LC/profile_form/ProfileForm';
import ActivityForm from './components/userLC/components_LC/activity_form/ActivityForm';
import LocationForm from './components/userLC/components_LC/location_form/LocationForm';
import EventCard from './components/userLC/components_LC/activity_events/EventCard';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/userLC" element={<UserLC />}>
          <Route path="profile_form" element={<ProfileForm />} />
          <Route path="location_form" element={<LocationForm /> } />
          <Route path="activity_form" element={<ActivityForm /> } />
          <Route path="events" element={<EventCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
