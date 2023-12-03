import dayjs from 'dayjs'

export const temperatureFormatter = (value) =>  `${typeof value === 'number' ? Math.round(value) : value}°C`

export const percentageFormatter = (value) =>  `${typeof value === 'number' ? Math.round(value) : value}%`

export const windSpeedFormatter = (value) =>  `${typeof value === 'number' ? Math.round(value) : value} km/h`

export const visibilityFormatter = (value) =>  `${typeof value === 'number' ? Math.round(value) / 1000 : value} km`

export const pressureFormatter = (value) =>  `${typeof value === 'number' ? Math.round(value) : value} hPa`

export const timeFormatter = (timestamp) =>  dayjs(timestamp).format('HH:mm')

export const dateFormatter = (timestamp) =>  dayjs(timestamp).format('dddd, DD MMM YYYY')

export const dateTimeFormatter = (timestamp) =>  dayjs(timestamp).format('dddd, DD MMM YYYY • HH:mm')
