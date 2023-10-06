import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { locationsSlice } from './slices/locationsSlice'
import { profileSlice } from './profileSlice/slice'
=======
import { locationsSlice } from './locationsSlices/locationsSlice'
>>>>>>> dev


export const store = configureStore({
  reducer: { 
    locations: locationsSlice.reducer,
    profile: profileSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch