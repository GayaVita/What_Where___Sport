import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFilteredLocations, getLocations } from './thunkActions';
import { ILocation } from '../../components/types';

// Define a type for the slice state
export interface ILocationsState {
  locations: ILocation[],
  filteredLocations: ILocation[],
}

// Define the initial state using that type
const initialState: ILocationsState = {
  locations: [],
  filteredLocations: [],
}

// Создание нового действия для установки отсортированных локаций
export const setSortedLocations = createAction<ILocation[]>('locationsSlice/setSortedLocations');
export const setSortedLocationsASC = createAction<ILocation[]>('locationsSliceASC/setSortedLocationsASC')
export const setSortedLocationsDESC = createAction<ILocation[]>('locationsSliceDESC/setSortedLocationsDESC')

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
    builder.addCase(
      setSortedLocationsASC,
      (state, action: PayloadAction<ILocation[]>) => {
        // Сортируйте локации по цене и устанавливайте их в sortedLocations
        
        state.filteredLocations = action.payload.slice()
        .sort((a, b) => a.location_price - b.location_price);
      }
    );
    builder.addCase(
      setSortedLocationsDESC,
      (state, action: PayloadAction<ILocation[]>) => {
        // Сортируйте локации по цене и устанавливайте их в sortedLocations
        
        state.filteredLocations = action.payload.slice()
        .sort((a, b) => b.location_price - a.location_price);
      }
    );
  },
});
