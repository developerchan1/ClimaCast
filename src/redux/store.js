import { configureStore } from '@reduxjs/toolkit'
import { openWeatherApi } from './apis/openWeatherApi'

export const store = configureStore({
  reducer: {
    [openWeatherApi.reducerPath]: openWeatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openWeatherApi.middleware),
})

