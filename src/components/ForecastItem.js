import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from 'react-native-vector-icons'
import upperCase from 'lodash/upperCase'

import textStyles from '../decorations/styles/textStyles'
import layoutStyles from '../decorations/styles/layoutStyles'
import spacingStyles from '../decorations/styles/spacingStyles'
import colors from '../decorations/colors'
import { temperatureFormatter, timeFormatter } from '../utils/formatter'


/**
 * Renders a single forecast item in the forecast list.
 * 
 * @param {object} forecastData - The forecast data object.
 * @param {number} forecastData.main.temp - The temperature in Celcius.
 * @param {string} forecastData.weather[0].main - The weather condition.
 * @param {number} forecastData.dt - The timestamp in seconds.
 * 
 * @returns {React.ReactElement} The forecast item component.
 */
const ForecastItem = ({ forecastData }) => {
  const navigation = useNavigation()

  /**
   * Navigates to the forecast detail screen when the forecast item is pressed.
   */
  const handleOnPressForecastItem = () => navigation.navigate('ForecastDetail', { forecastData })

  return (
    <TouchableOpacity
      style={[
        layoutStyles.row,
        layoutStyles.alignCenter,
        layoutStyles.spaceBetween,
        layoutStyles.borderBottom1,
        spacingStyles.margin16,
        spacingStyles.paddingVertical8,
      ]}
      onPress={handleOnPressForecastItem}
    >
      <View style={layoutStyles.flexFull}>
        <Text style={textStyles.subHeadingTitleText}>{temperatureFormatter(forecastData.main.temp)}</Text>
        <View style={[layoutStyles.row, layoutStyles.alignCenter]}>
          <Image
            style={{
              width: 50,
              height: 50
            }}
            source={{
              uri: `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@4x.png`
            }}
          />
          <Text
            style={[
              textStyles.bodyContentText,
              layoutStyles.opacity60
            ]}
          >
            {upperCase(forecastData.weather[0].main)}
          </Text>
      </View>
      </View>
        <View
          style={[
            layoutStyles.row,
            layoutStyles.alignCenter,
            layoutStyles.opacity60
          ]}>
          <Feather
            style={spacingStyles.marginRight8}
            name='clock'
            color={colors.white}
            size={24}
          />
          <Text
            style={[
              textStyles.bodyTitleText,
              textStyles.mediumText
            ]}
          >
            {timeFormatter(forecastData.dt * 1000)}
          </Text>
        </View>
    </TouchableOpacity>
  )
}

export default ForecastItem