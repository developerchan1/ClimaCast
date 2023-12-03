import { StyleSheet } from 'react-native'

import PageContainer from '../containers/PageContainer'
import WeatherBody from '../components/WeatherBody'
import Header from '../components/Header'

const ForecastDetailScreen = ({ route }) => {
  const forecastData = route.params.forecastData

  const renderHeader = () => <Header style={styles.header} />

  return (
    <PageContainer
      showHeader
      renderHeader={renderHeader}
    >
      <WeatherBody data={forecastData} isForecast />
    </PageContainer>
  )
}

export default ForecastDetailScreen

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    paddingTop: 48
  }
})
