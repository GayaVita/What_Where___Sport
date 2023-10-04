import { configureStore } from '@reduxjs/toolkit'
import { locationsSlice } from './slices/locationsStore'


export const store = configureStore({
  reducer: { locationsSlice: locationsSlice.reducer }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch