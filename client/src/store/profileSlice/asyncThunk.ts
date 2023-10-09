import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileFormType } from './types';
import axios, { AxiosError} from 'axios';

interface ValidationErrors {
  message: string;
}

export const fetchProfile = createAsyncThunk<ProfileFormType, ProfileFormType, { rejectValue: ValidationErrors}>('profile/add', async (formData, {rejectWithValue }) => {
    try {
      const response = await axios.post('/userLC/profile_form', formData);
      return response.data;
    } catch (err) {
      const error: AxiosError<ValidationErrors> = err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
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