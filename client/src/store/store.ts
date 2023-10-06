import { configureStore } from '@reduxjs/toolkit'
import { locationsSlice } from './slices/locationsSlice'
import { profileSlice } from './profileSlice/slice'


export const store = configureStore({
  reducer: { 
    locations: locationsSlice.reducer,
    profile: profileSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch