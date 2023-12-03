import { API_KEY } from '@env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const openWeatherApi = createApi({
  reducerPath: 'openWeatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/' }),
  endpoints: (builder) => ({
    getForecast: builder.query({
      query: (coordinate) => `/data/2.5/forecast?&appid=${API_KEY}&lat=${coordinate.lat}&lon=${coordinate.lon}&units=metric`,
    }),
    getCurrentWeather: builder.query({
      query: (coordinate) => `/data/2.5/weather?appid=${API_KEY}&lat=${coordinate.lat}&lon=${coordinate.lon}&units=metric`,
    }),
  }),
})


export const { useLazyGetForecastQuery, useLazyGetCurrentWeatherQuery } = openWeatherApi