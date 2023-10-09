import { configureStore } from '@reduxjs/toolkit'
// import { locationsSlice } from './slices/locationsSlice'
import { sliceUser } from './userSlice/sliceUser'
import { locationsSlice } from './locationsSlices/locationsSlice'
import { profileSlice } from './profileSlice/slice'


export const store = configureStore({
  reducer: { 
    locations: locationsSlice.reducer,
    user: sliceUser.reducer,
    profile: profileSlice.reducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch