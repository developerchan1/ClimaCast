import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import isEmpty from 'lodash/isEmpty'
import dayjs from 'dayjs'

import Loading from '../components/Loading'
import Header from '../components/Header'
import DateTabs from '../components/DateTabs'
import WeatherDate from '../components/WeatherDate'
import ForecastItem from '../components/ForecastItem'
import Error, { ERROR_TYPE } from '../components/Error'

import PageContainer from '../containers/PageContainer'
import { useLazyGetForecastQuery } from '../redux/apis/openWeatherApi'

const ForecastListScreen = ({ route }) => {
  const location = route?.params?.location
  const [selectedDateTab, setSelectedDateTab] = useState()
  const [filteredForecaseList, setFilteredForecaseList] = useState([])
  const [getForecast, { data, isError, isLoading }] = useLazyGetForecastQuery()

  useEffect(() => {
    handleGetForecastList()
  }, [location])

  useEffect(() => {
    if (!isEmpty(selectedDateTab) && !isEmpty(data)) {
      setFilteredForecaseList(data.list.filter((item) => dayjs(item.dt * 1000).format('YYYY-MM-DD') === selectedDateTab))
    }
  }, [selectedDateTab, data])

  const handleGetForecastList = () => {
    if (!isEmpty(location)) {
      getForecast({ lat: location?.coords?.latitude, lon: location?.coords?.longitude })
    }
  }

  const renderHeader = () => <Header />

  return (
    <PageContainer
      showHeader
      avoidNotch
      renderHeader={renderHeader}
    >
      {
        isLoading
          ? <Loading />
          : isEmpty(data) || isError
            ? <Error
                errorType={ERROR_TYPE.REQUEST_ERROR}
                onRefetch={handleGetForecastList}
              />
            : <>
                <DateTabs
                  data={data}
                  selectedDateTab={selectedDateTab}
                  setSelectedDateTab={setSelectedDateTab}
                />
                <WeatherDate
                  style={{ padding: 16 }}
                  timestamp={selectedDateTab}
                  withTime={false}
                />
                <FlatList
                  style={{ flex: 1 }}
                  data={filteredForecaseList}
                  renderItem={({ item }) => (
                    <ForecastItem forecastData={item} />
                  )}
                />
              </>
      }
    </PageContainer>
  )
}

export default ForecastListScreen
