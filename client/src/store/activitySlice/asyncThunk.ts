import { createAsyncThunk } from '@reduxjs/toolkit';
import {ActivityFormType} from './types'

export const fetchActivity = createAsyncThunk('activity/add', async (formData: ActivityFormType) => {
  try {
    const response = await fetch('http://localhost:3000/userLC/activity_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({formData})
    });
    return response.json()
  } catch (error) {
    console.log(error)
  }
})