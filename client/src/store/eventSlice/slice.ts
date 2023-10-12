import { createSlice } from '@reduxjs/toolkit';
import { deleteEvent, getAllEvents, rejectSubscribersRequest } from './asyncThunk';
import { ActivityType, SubscriberType } from '../all_activitiesSlice/types';


export interface IEventState {
  events: ActivityType[];
  subscribers: SubscriberType[];
  error: string | null | undefined;
}

const initialState: IEventState = {
  events: [],
  subscribers: [],
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
    builder.addCase(deleteEvent.fulfilled, (state, action) => {
      state.events = state.events.filter((el) => el.id !== action.payload);
      state.error = null;
    });
    builder.addCase(rejectSubscribersRequest.fulfilled, (state, action) => {
      // state.subscribers = state.subscribers.map((el) => el.id === action?.payload?.id ? {...el, status: action?.payload?.status} : el)  
      state.error = null;
      // state.events = state.events.map((event) => event.Subscribers?.map((subscriber) => subscriber.id === action?.payload?.id ? action.payload : subscriber))
      state.events = state.events.map((event) => event.id === action?.payload?.id ? action.payload : event)
    });
  },
});
