import { createSlice } from '@reduxjs/toolkit';
import { ProfileFormType } from './types';
import { fetchProfile, getUserProfile } from './asyncThunk';

export interface IProfileState {
  profile: ProfileFormType | null;
  error: string | null | undefined;
}

const initialState: IProfileState = {
  profile: null,
  error: null,
};

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.profile = null;
      if (action.payload) {
        state.error = action.payload.message;
      }
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});
