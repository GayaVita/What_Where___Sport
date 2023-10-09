import { createSlice } from '@reduxjs/toolkit';
import { LocationLCFormType } from './types';
import { fetchLocationLC, getAllLocations, getAllUserLocations } from './asyncThunk';

export interface ILocationLCState {
  locations: LocationLCFormType[],
  locationLC: LocationLCFormType | null,
  error: string | null | undefined;
}

const initialState: ILocationLCState = {
  locations: [],
  locationLC: null,
  error: null
}

export const locationLCSlice = createSlice({
  name: 'locationLCSlice',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(fetchLocationLC.pending, (state) => {
      state.locationLC = null;
      state.error = null;
    })
    builder.addCase(fetchLocationLC.fulfilled, (state, action) => {
      state.locationLC = action.payload;
      state.error = null;
    })
    builder.addCase(fetchLocationLC.rejected, (state, action) => {
      state.locationLC = null;
      if (action.payload) {
        state.error = action.payload.message
      }
    });
    builder.addCase(getAllUserLocations.pending, (state) => {
      state.locations = [];
      state.error = null;
    });
    builder.addCase(getAllUserLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
      state.error = null;
    });
    builder.addCase(getAllLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
      state.error = null;
    });
  },
})