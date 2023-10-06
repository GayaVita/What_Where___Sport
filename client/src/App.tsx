import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// import './App.css';
import UserLC from './components/userLC/UserLC';
import Registration from './components/Registration/Registration';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import ProfileForm from './components/userLC/components_LC/profile_form/ProfileForm';
import ActivityForm from './components/userLC/components_LC/activity_form/ActivityForm';
import LocationForm from './components/userLC/components_LC/location_form/LocationForm';
import EventCard from './components/userLC/components_LC/activity_events/EventCard';
import Locations from './components/Locations/Locations';
import { useAppSelector } from './store/hooks';


import { useAppDispatch } from './store/hooks';
import { checkAuth } from './store/userSlice/thunkUser';

function App(): JSX.Element {
  
  const dispatch = useAppDispatch();
 useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/access" element={<Registration />} />
        <Route path="/userLC" element={<UserLC />}>
          <Route path="profile_form" element={<ProfileForm />} />
          <Route path="location_form" element={<LocationForm />} />
          <Route path="activity_form" element={<ActivityForm />} />
          <Route path="events" element={<EventCard />} />
        </Route>
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
