import { ScrollView, View, StyleSheet } from 'react-native'

import colors from '../decorations/colors'
import layoutStyles from '../decorations/styles/layoutStyles'

/**
 * Renders a page container with a header and a scrollable content area.
 *
 * @param {function} renderHeader - A function that returns the header content
 * @param {ReactNode} children - The scrollable content area
 * @param {boolean} [avoidNotch=false] - Whether to avoid the notch at the top of the screen on iOS devices
 * @returns {ReactElement} The page container element
 */
const PageContainer = ({ renderHeader, children, avoidNotch = false }) => {
  return (
    <View
      style={[
        layoutStyles.flexFull,
        styles.container,
        avoidNotch ? styles.avoidNotchContainer : {},
      ]}
    >
      {
        typeof renderHeader === 'function'
          ? renderHeader()
          : <></>
      }
      <ScrollView style={layoutStyles.flexFull}>
        {children}
      </ScrollView>
    </View>
  )
}

export default PageContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark
  },
  avoidNotchContainer: {
    paddingTop: 48
  }
})
