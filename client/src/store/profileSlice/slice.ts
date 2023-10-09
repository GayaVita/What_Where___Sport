import { createSlice } from '@reduxjs/toolkit';
import { ProfileFormType } from './types';
import { fetchProfile, getUserProfile } from './asyncThunk';

export interface IProfileState {
  profile: ProfileFormType | null
}

const initialState: IProfileState = {
  profile: null
}

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    })
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    })
  },
})