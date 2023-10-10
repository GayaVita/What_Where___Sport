import { createSlice } from '@reduxjs/toolkit';
import { ActivityType } from './types';
import { fetchActivity } from './asyncThunk';

export interface IActivityState {
  activity: ActivityType | null;
  error: string | null | undefined;
}

const initialState: IActivityState = {
  activity: null,
  error: null,
};

export const activitySlice = createSlice({
  name: 'activitySlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchActivity.pending, (state) => {
      state.activity = null;
      state.error = null;
    });
    builder.addCase(fetchActivity.fulfilled, (state, action) => {
      state.activity = action.payload;
      state.error = null;
    });
    builder.addCase(fetchActivity.rejected, (state, action) => {
      state.activity = null;
      if (action.payload) {
        state.error = action.payload.message;
      }
    });
  },
});