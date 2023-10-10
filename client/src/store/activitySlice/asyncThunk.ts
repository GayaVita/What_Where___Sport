import { createAsyncThunk } from '@reduxjs/toolkit';
import {ActivityType} from './types';
import axios, { AxiosError } from 'axios';

interface ValidationErrors {
  message: string;
}

export const fetchActivity = createAsyncThunk<ActivityType, ActivityType, {rejectValue: ValidationErrors }>('locationLC/add', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post<ActivityType>('http://localhost:3000/userLC/activity_form', formData);
    return response.data as ActivityType;
  } catch (err) {
    const error: AxiosError<ValidationErrors> = err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
})