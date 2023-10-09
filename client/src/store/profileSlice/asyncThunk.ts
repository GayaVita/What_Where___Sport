import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileFormType } from './types';
import axios from 'axios';

export const fetchProfile = createAsyncThunk('profile/add', async (formData: ProfileFormType) => {
  try {
    // { user_name, user_about, user_age, user_tg}
    const response = await fetch('http://localhost:3000/userLC/profile_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
});

export const getUserProfile = createAsyncThunk('profile/get', async () => {
  try {
    const response = await axios('/userLC/profile_form');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});