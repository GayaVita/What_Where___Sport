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
import EventCard from './components/userLC/components_LC/events/EventCardLC/EventCardLC';
import Locations from './components/Locations/Locations';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { ILogin } from './types/types';
import { getUserProfile } from './store/profileSlice/asyncThunk';

function App(): JSX.Element {
  const { locations } = useAppSelector((store) => store.locations);
  const [user, setUser] = useState<ILogin>({ id: '',login: '' });
  // console.log('user', user)

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // dispatch(checkAuth());
    dispatch(getUserProfile());
  }, [dispatch])

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/access" element={<Registration setUser={setUser} />} />
        <Route path="/userLC" element={<UserLC user={user} />}>
          <Route path="profile_form" element={<ProfileForm />} />
          <Route path="location_form" element={<LocationForm user={user} />} />
          <Route path="activity_form" element={<ActivityForm />} />
          <Route path="events" element={<EventCard />} />
        </Route>
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
