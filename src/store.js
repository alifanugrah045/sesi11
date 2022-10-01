import { configureStore } from '@reduxjs/toolkit'
import usersReducer  from './features/users/userSlice'
import logger from 'redux-logger'


export default configureStore({
  reducer: {
    users: usersReducer,
    

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})