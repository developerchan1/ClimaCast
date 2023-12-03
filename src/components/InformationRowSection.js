import { Image, StyleSheet, Text, View } from'react-native'

import layoutStyles from '../decorations/styles/layoutStyles'
import spacingStyles from '../decorations/styles/spacingStyles'
import textStyles from '../decorations/styles/textStyles'

/**
 * This function is used to render an information row with two columns,
 * consisting of an image and text on the left, and an image and text on the right.
 *
 * @param {object} props - The properties of the component
 * @param {object} props.leftImgSrc - The source of the image on the left
 * @param {string} props.leftLabel - The label displayed on the left
 * @param {string} props.leftValue - The value displayed on the left
 * @param {object} props.rightImgSrc - The source of the image on the right
 * @param {string} props.rightLabel - The label displayed on the right
 * @param {string} props.rightValue - The value displayed on the right
 * @returns {JSX.Element} - A React element that renders the information row
 */
const InformationRowSection = ({
  leftImgSrc,
  leftLabel,
  leftValue,
  rightImgSrc,
  rightLabel,
  rightValue
}) => {
  return (
    <View
      style={[
        layoutStyles.row,
        spacingStyles.paddingVertical16,
        spacingStyles.marginHorizontal16,
        layoutStyles.borderBottom1
      ]}
    >
      <View style={[layoutStyles.row, layoutStyles.flexFull, spacingStyles.marginRight8]}>
        <Image
          source={leftImgSrc}
          style={[styles.image, spacingStyles.marginRight8]}
        />
        <View style={layoutStyles.flexFull}>
          <Text style={[textStyles.bodyContentText, layoutStyles.opacity60]}>
            {leftLabel}
          </Text>
          <Text style={[textStyles.subHeadingBodyText]}>
            {leftValue}
          </Text>
        </View>
      </View>
      <View style={[layoutStyles.row, layoutStyles.flexFull]}>
        <Image source={rightImgSrc} style={[styles.image, spacingStyles.marginRight8]} />
        <View style={layoutStyles.flexFull}>
          <Text style={[textStyles.bodyContentText, layoutStyles.opacity60]}>
            {rightLabel}
          </Text>
          <Text style={[textStyles.subHeadingBodyText]}>
            {rightValue}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default InformationRowSection

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32
  }
})
