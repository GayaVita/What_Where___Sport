import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { locationsSlice } from './slices/locationsSlice'
import { sliceUser } from './userSlice/sliceUser'
=======
import { locationsSlice } from './locationsSlices/locationsSlice'
import { profileSlice } from './profileSlice/slice'
import { mapSlice } from './mapSlice/slice'

>>>>>>> dev

export const store = configureStore({
  reducer: { 
    locations: locationsSlice.reducer,
<<<<<<< HEAD
    user: sliceUser.reducer
   }
=======
    profile: profileSlice.reducer,
    mapSlice: mapSlice.reducer,
  }
})
>>>>>>> dev

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch