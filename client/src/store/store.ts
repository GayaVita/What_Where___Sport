import { configureStore } from '@reduxjs/toolkit'

import { sliceUser } from './userSlice/sliceUser'
import { locationsSlice } from './locationsSlices/locationsSlice'
import { profileSlice } from './profileSlice/slice'
import { locationLCSlice } from './locationLCSlice/slice'

export const store = configureStore({
  reducer: { 
    user: sliceUser.reducer,
    locations: locationsSlice.reducer,
    profile: profileSlice.reducer,
    locationLC: locationLCSlice.reducer
   }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch