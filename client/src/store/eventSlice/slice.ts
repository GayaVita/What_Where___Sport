import { createSlice } from '@reduxjs/toolkit';
import { getAllEvents } from './asyncThunk';
import { ActivityType } from '../all_activitiesSlice/types';


export interface IEventState {
  events: ActivityType[];
  error: string | null | undefined;
}

const initialState: IEventState = {
  events: [],
  error: null,
};

export const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllEvents.fulfilled, (state, action) => {
      state.events = action.payload;
      state.error = null;
    });
  },
});
