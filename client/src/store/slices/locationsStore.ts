import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getLocations } from '../thunkActions';
import { ILocation } from '../../components/types';

// Define a type for the slice state
export interface ILocationsState {
  locations: ILocation[]
}

// Define the initial state using that type
const initialState: ILocationsState = {
  locations: []
}

export const locationsSlice = createSlice({
  name: 'locationsSlice',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(
      getLocations.fulfilled,
      (state, action: PayloadAction<ILocation[]>) => {
        state.locations = action.payload;
      }
    );
  },
});