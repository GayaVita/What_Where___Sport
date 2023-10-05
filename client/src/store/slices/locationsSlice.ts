import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFilteredLocations, getLocations } from '../thunkActions';
import { ILocation } from '../../components/types';

// Define a type for the slice state
export interface ILocationsState {
  locations: ILocation[],
  filteredLocations: ILocation[]
}

// Define the initial state using that type
const initialState: ILocationsState = {
  locations: [],
  filteredLocations: []
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
    builder.addCase(
      getFilteredLocations.fulfilled,
      (state, action: PayloadAction<ILocation[]>) => {
        state.filteredLocations = action.payload;
      }
    );
  },
});
