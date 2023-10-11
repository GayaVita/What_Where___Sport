import { createAsyncThunk } from '@reduxjs/toolkit';
import {ActivityType} from './types';
import axios from 'axios';


export const getAllActivities = createAsyncThunk<ActivityType[]>('all_activities/get', async () => {
  const response = await axios('/all_activities');
  return response.data as ActivityType[]
});

export const addSubscriber = createAsyncThunk('subscriber/add', async (id: number) => {
  const response = await axios.post(`/subscribers/${id}`);
  return response.data;
})
