import { createSlice } from '@reduxjs/toolkit';
import { IUser } from './types';
import {
  addImageToProfile,
  checkAuth,
  fetchUserLogin,
  fetchUserLogout,
  fetchUserRegister,
  updateUser,
} from './thunkUser';

interface IUserState {
  user: IUser | null;
  status: 'fetching' | 'logged' | 'empty';
  error: string | null | undefined;
}

const initialState: IUserState = {
  user: null,
  status: 'fetching',
  error: null,
};

export const sliceUser = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUserRegister.pending, (state) => {
      state.status = 'fetching';
      state.error = null;
    });
    builder.addCase(fetchUserRegister.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'logged';
      state.error = null;
    });
    builder.addCase(fetchUserRegister.rejected, (state, action) => {
      state.status = 'empty';
      if (action.payload) {
        state.error = action.payload.message;
      }
    });
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.status = 'fetching';
      state.error = null;
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'logged';
      state.error = null;
    });
    builder.addCase(fetchUserLogin.rejected, (state, action) => {
      state.status = 'empty';
      if (action.payload) {
        state.error = action.payload.message;
      }
    });
    builder.addCase(fetchUserLogout.fulfilled, (state) => {
      state.user = null;
      state.error = null;
      state.status = 'empty';
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
      }
      state.error = null;
      state.status = 'logged';
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.user = null;
      state.status = 'empty';
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.status = 'logged';
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.message;
      }
      state.status = 'logged';
    });
    builder.addCase(addImageToProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.status = 'logged';
    });
  },
});

export { fetchUserRegister, fetchUserLogin };
