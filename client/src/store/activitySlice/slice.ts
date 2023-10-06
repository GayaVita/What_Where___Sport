import { createSlice } from '@reduxjs/toolkit';
import { ActivityFormType } from './types';
import { fetchActivity, fetchProfile } from './asyncThunk';

export interface IActivityState {
  profile: ActivityFormType | null
}

const initialState: IActivityState = {
  profile: null
}

export const activitySlice = createSlice({
  name: 'activitySlice',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(fetchActivity.fulfilled, (state, action) => {
      state.profile = action.payload;
    })
  },
})