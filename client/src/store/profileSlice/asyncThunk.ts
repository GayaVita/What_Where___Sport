import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileFormType } from './types';

export const fetchProfile = createAsyncThunk('profile/add', async (formData: ProfileFormType) => {
  try {
    // { user_name, user_about, user_age, user_tg}
    const response = await fetch('http://localhost:3000/userLC/profile_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({formData})
    });
    return response.json();
  } catch (error) {
    console.log(error)
  }
})