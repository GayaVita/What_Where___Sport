import { configureStore } from '@reduxjs/toolkit'
import { locationsSlice } from './locationsSlices/locationsSlice'


export const store = configureStore({
  reducer: { locations: locationsSlice.reducer }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch