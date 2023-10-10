import { createSlice } from '@reduxjs/toolkit';
import { ActivityType, SubscriberType } from './types';
import { addSubscriber, getAllActivities } from './asyncThunk';

export interface IActivityState {
  activities: ActivityType[];
  activity: ActivityType | null;
  subscriber: SubscriberType | null;
  error: string | null | undefined;
}

const initialState: IActivityState = {
  activities: [],
  subscriber: null,
  activity: null,
  error: null,
};

export const all_activitiesSlice = createSlice({
  name: 'all_activitiesSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllActivities.fulfilled, (state, action) => {
      state.activities = action.payload;
      state.error = null;
    });
    builder.addCase(addSubscriber.fulfilled, (state, action) => {
      state.subscriber = action.payload;
      state.error = null;
    });
  },
});
