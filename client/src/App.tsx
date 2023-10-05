import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UserLC from './components/userLC/UserLC';
import Locations from './components/Locations/Locations';
import { useAppSelector } from './store/hooks';

function App(): JSX.Element {
  const { locations } = useAppSelector((store) => store.locations);
  console.log(locations);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/userLC" element={<UserLC />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
