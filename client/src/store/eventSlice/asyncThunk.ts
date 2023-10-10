import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { ActivityType } from '../all_activitiesSlice/types';

export const getAllEvents = createAsyncThunk<ActivityType[]>('usersEvents/get', async () => {
  const response = await axios('/userLC/event');
  return response.data as ActivityType[]
});