import { configureStore } from '@reduxjs/toolkit'

import { sliceUser } from './userSlice/sliceUser'
import { locationsSlice } from './locationsSlices/locationsSlice'
import { profileSlice } from './profileSlice/slice'
import { locationLCSlice } from './locationLCSlice/slice'
import { all_activitiesSlice } from './all_activitiesSlice/slice'
import { activitySlice } from './activitySlice/slice'
import { eventSlice } from './eventSlice/slice'

export const store = configureStore({
  reducer: { 
    user: sliceUser.reducer,
    locations: locationsSlice.reducer,
    profile: profileSlice.reducer,
    locationLC: locationLCSlice.reducer,
    activityLC: activitySlice.reducer,
    all_activities: all_activitiesSlice.reducer,
    events: eventSlice.reducer 
   }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch