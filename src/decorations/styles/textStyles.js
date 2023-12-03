import { StyleSheet } from 'react-native'
import fontFamily from '../fontFamily'
import colors from '../colors'

export default textStyles = StyleSheet.create({
  italicText: {
    fontFamily: fontFamily.italic,
  },
  regularText: {
    fontFamily: fontFamily.regular,
  },
  mediumText: {
    fontFamily: fontFamily.medium,
  },
  semiBoldText: {
    fontFamily: fontFamily.semibold,
  },
  boldText: {
    fontFamily: fontFamily.bold,
  },
  textCenter: {
    textAlign: 'center',
  },
  headingText: {
    fontSize: 72,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    color: colors.white
  },
  subHeadingTitleText: {
    fontSize: 32,
    fontFamily: fontFamily.bold,
    color: colors.white
  },
  subHeadingBodyText: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.white
  },
  bodyTitleText: {
    fontSize: 18,
    fontFamily: fontFamily.bold,
    color: colors.white
  },
  bodyContentText: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.white
  }
})