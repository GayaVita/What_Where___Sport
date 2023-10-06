import { configureStore } from '@reduxjs/toolkit'
import { locationsSlice } from './slices/locationsSlice'
import { sliceUser } from './userSlice/sliceUser'

export const store = configureStore({
  reducer: { 
    locations: locationsSlice.reducer,
    user: sliceUser.reducer
   }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch