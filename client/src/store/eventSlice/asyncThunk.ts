import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { ActivityType, SubscriberType } from '../all_activitiesSlice/types';

export const getAllEvents = createAsyncThunk<ActivityType[]>('usersEvents/get', async () => {
  const response = await axios('/userLC/event');
  return response.data as ActivityType[];
});

export const deleteEvent = createAsyncThunk('userEvent/delete', async (id: number) => {
  try {
    await axios.delete(`/userLC/event/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const rejectSubscribersRequest = createAsyncThunk(
  'subscriber/updateStaus',
  async (id: number) => {
    try {
      const response = await axios.patch(`/userLC/event/${id}`);
      return response.data as SubscriberType;
    } catch (error) {
      console.log(error);
    }
  },
);
