import { createAsyncThunk } from '@reduxjs/toolkit';
import {LocationLCFormType} from './types'
import axios, { AxiosError } from 'axios';

interface ValidationErrors {
  message: string;
}

export const fetchLocationLC = createAsyncThunk<LocationLCFormType, LocationLCFormType, {rejectValue: ValidationErrors }>('locationLC/add', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post<LocationLCFormType>('http://localhost:3000/userLC/location_form', formData);
    return response.data as LocationLCFormType;
  } catch (err) {
    const error: AxiosError<ValidationErrors> = err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
})

export const getAllUserLocations = createAsyncThunk<LocationLCFormType[]>('userLocations/all', async () => {
  const response = await axios('/userLC/activity_form');
  return response.data as LocationLCFormType[]
});

export const getAllLocations = createAsyncThunk<LocationLCFormType[]>('locations/all', async () => {
  const response = await axios('/');
  return response.data as LocationLCFormType[]
});