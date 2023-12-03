import { Text, View } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

import layoutStyles from '../decorations/styles/layoutStyles'
import colors from '../decorations/colors'
import spacingStyles from '../decorations/styles/spacingStyles'
import textStyles from '../decorations/styles/textStyles'
import { dateFormatter, dateTimeFormatter } from '../utils/formatter'

/**
 * Returns a component that displays the date and time of a weather forecast.
 *
 * @param {object} props - The properties of the component
 * @param {number} props.timestamp - The timestamp of the weather forecast
 * @param {boolean} [props.withTime=true] - Whether to display the time or not
 * @param {object} styles - The styles of the component
 * @param {object} textStyles - The text styles of the component
 * @returns {JSX.Element} The component
 */
const WeatherDate = ({ style, timestamp, withTime = true }) => {
  const formatter = withTime? dateTimeFormatter : dateFormatter
  return (
    <View
      style={[
        layoutStyles.row,
        layoutStyles.center,
        layoutStyles.opacity60,
        style
      ]}
    >
      <Ionicons name='calendar-outline' color={colors.white} size={24} style={spacingStyles.marginRight8} />
      <Text style={textStyles.bodyContentText}>{formatter(timestamp)}</Text>
    </View>
  )
}

export default WeatherDate
