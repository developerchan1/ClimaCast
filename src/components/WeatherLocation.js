import { Text, View } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

import layoutStyles from '../decorations/styles/layoutStyles'
import colors from '../decorations/colors'
import spacingStyles from '../decorations/styles/spacingStyles'

/**
 * Returns a React component that displays the location name with a location icon.
 * 
 * @param {string} locationName - The name of the location to be displayed
 * @returns {JSX.Element} A React component that displays the location name with a location icon
 */
const WeatherLocation = ({ locationName }) => {
  return (
    <View style={[layoutStyles.row, layoutStyles.center, layoutStyles.opacity60]}>
      <Ionicons name='location-sharp' color={colors.white} size={24} style={spacingStyles.marginRight8} />
      <Text style={textStyles.bodyTitleText}>{locationName}</Text>
    </View>
  )
}

export default WeatherLocation
