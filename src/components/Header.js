import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button, { BUTTON_TYPE } from './Button'

/**
 * A React component that represents the header of a screen.
 * It displays a back button if the `showBack` prop is set to `true`,
 * and allows the user to go back to the previous screen.
 *
 * @param {object} props - The props passed to the component
 * @param {boolean} [props.showBack=true] - Whether to show the back button
 * @param {object} [props.style] - The style to apply to the component
 */
const Header = ({ showBack = true, style }) => {
  const navigation = useNavigation()

  const handleGoBack = () => navigation.goBack()

  return (
    <View style={[styles.headerContainer, style]}>
      {
        showBack
          ? <Button
              buttonText='Back'
              onPress={handleGoBack}
              buttonType={BUTTON_TYPE.GHOST_WHITE}
              showLeftArrowIcon
            />
          : <></>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'flex-start',
  },
})
