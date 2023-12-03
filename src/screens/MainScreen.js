import { useEffect, useRef, useState } from 'react'
import { AppState } from 'react-native'
import isEmpty from 'lodash/isEmpty'
import * as Location from 'expo-location'

import Loading from '../components/Loading'
import WeatherBody from '../components/WeatherBody'
import Error, { ERROR_TYPE } from '../components/Error'
import PageContainer from '../containers/PageContainer'

import { useLazyGetCurrentWeatherQuery } from '../redux/apis/openWeatherApi'

const MainScreen = ({}) => {
  const appState = useRef(AppState.currentState)
  const [location, setLocation] = useState()
  const [getCurrentWeather, { data, isLoading, isError }] = useLazyGetCurrentWeatherQuery()

  useEffect(() => {
    handleGetLocation()
  }, [])

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange)
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange)
    }
  }, [])

  const _handleAppStateChange = nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      handleGetLocation()
    }
    appState.current = nextAppState
  }

  const handleGetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({})
      handleGetCurrentWeather(location)
      setLocation(location)
    }
  }

  const handleGetCurrentWeather = (location) => {
    if (!isEmpty(location)) {
      getCurrentWeather({
        lat: location?.coords?.latitude,
        lon: location?.coords?.longitude
      })
    }
  }

  return (
    <PageContainer onRefresh={handleGetCurrentWeather}>
      {
        isLoading
          ? <Loading />
          : isEmpty(location) || isEmpty(data) || isError
            ? <Error
                errorType={
                  isEmpty(location)
                    ? ERROR_TYPE.LOCATION_PERMISSIONS_DENIED
                    : ERROR_TYPE.REQUEST_ERROR
                }
                onRefetch={handleGetLocation}
              />
            : <WeatherBody data={data} location={location} />
      }
    </PageContainer>
  )
}

export default MainScreen
