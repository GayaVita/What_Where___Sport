import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IMapState {
  coords: number[];
  location_address: string;
}

const initialState: IMapState = {
  coords: [],
  location_address: ''
}

export const mapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setCoords: (state, action) => {
      state.coords = action.payload.coords;
      state.location_address = action.payload.location_address;
    }
  },
  // extraReducers(builder) {
  //   builder.addCase(getCoords.fulfilled, (state, action) => {
  //     state.coords = action.payload.coords;
  //     state.location_address = action.payload.location_address
  //   })
  // },
});



export const { setCoords } = mapSlice.actions;
