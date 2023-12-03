import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from 'react-native-vector-icons'

import colors from '../decorations/colors'
import fontFamily from '../decorations/fontFamily'
import spacingStyles from '../decorations/styles/spacingStyles'
import layoutStyles from '../decorations/styles/layoutStyles'

export const BUTTON_TYPE = {
  SOLID: 'solid',
  GHOST_PRIMARY: 'ghostPrimary',
  GHOST_WHITE: 'ghostWhite',
}

/**
 * Button component
 * @param {object} props 
 * @param {string} props.buttonText - Text to be displayed on the button
 * @param {function} props.onPress - Callback function to be executed on press
 * @param {string} [props.buttonType=BUTTON_TYPE.SOLID] - Type of button (solid, ghostPrimary, ghostWhite)
 * @param {boolean} [props.showRightArrowIcon=false] - Whether to show an arrow icon on the right
 * @param {boolean} [props.showLeftArrowIcon=false] - Whether to show an arrow icon on the left
 * @returns {JSX.Element} Button component
 */

const Button = ({
  style,
  buttonText,
  onPress,
  buttonType = BUTTON_TYPE.SOLID,
  showRightArrowIcon = false,
  showLeftArrowIcon = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        layoutStyles.row,
        layoutStyles.center,
        styles[`${buttonType}Container`], style]
      }
      onPress={onPress}
    >
      {
        showLeftArrowIcon
          ? <Feather
              style={[
                spacingStyles.marginRight8,
                styles[`${buttonType}Icon`],
              ]}
              name='arrow-left-circle'
              size={24}
            />
          : <></>
      }
      <Text style={styles[`${buttonType}Text`]}>{buttonText}</Text>
      {
        showRightArrowIcon
          ? <Feather
              style={[
                spacingStyles.marginLeft8,
                styles[`${buttonType}Icon`],
              ]}
              name='arrow-right-circle'
              size={24}
            />
          : <></>
      }
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  solidContainer: {
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 20,
    alignSelf: 'center',
  },
  solidText: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    color: colors.white
  },
  solidIcon: {
    color: colors.white
  },
  ghostPrimaryContainer: {
    padding: 18,
    alignSelf: 'center',
  },
  ghostPrimaryText: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    color: colors.primary
  },
  ghostPrimaryIcon: {
    color: colors.primary
  },
  ghostWhiteContainer: {
    padding: 18,
    alignSelf: 'center',
  },
  ghostWhiteText: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    color: colors.white
  },
  ghostWhiteIcon: {
    color: colors.white
  }
})
