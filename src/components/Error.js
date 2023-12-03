import { Image, View, Dimensions, Text, Platform, Linking } from 'react-native'
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher'

import Button from './Button'
import layoutStyles from '../decorations/styles/layoutStyles'
import spacingStyles from '../decorations/styles/spacingStyles'

const { width, height } = Dimensions.get('window')

export const ERROR_TYPE = {
	LOCATION_PERMISSIONS_DENIED: 'LOCATION_PERMISSIONS_DENIED',
	REQUEST_ERROR: 'REQUEST_ERROR'
}


export const ERROR_IMAGE = {
	LOCATION_PERMISSIONS_DENIED: require('../assets/images/access-denied.png'),
	REQUEST_ERROR: require('../assets/images/error.png')
}


export const ERROR_TEXT = {
	LOCATION_PERMISSIONS_DENIED: 'Location Permissions Denied!\nPlease Allow Location Access in Settings.',
	REQUEST_ERROR: 'Error Occured! Please try again.'
}

export const ERROR_BTN_TEXT = {
	LOCATION_PERMISSIONS_DENIED: 'Go To Settings',
	REQUEST_ERROR: 'Refresh'
}

/**
 * @description This component is used to display errors that occur during the app.
 * @param {string} errorType - The type of error that occurred.
 * @param {function} onRefetch - A function that can be called to refetch data.
 * @returns {JSX.Element}
 */
const Error = ({ errorType = ERROR_TYPE.LOCATION_PERMISSIONS_DENIED, onRefetch }) => {
	const handlePressBtn = () => {
    switch (errorType) {
      case ERROR_TYPE.LOCATION_PERMISSIONS_DENIED:
        if (Platform.OS == 'ios') {
          Linking.openURL('app-settings:')
        } else {
          startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS)
        }
        break
      case ERROR_TYPE.REQUEST_ERROR:
        typeof onRefetch === 'function' ? onRefetch() : null
        break
    }
  }

	return (
		<View style={[layoutStyles.flexFull, layoutStyles.center, { height }]}>
			<Image
				source={ERROR_IMAGE[errorType]}
				style={{
					height: width * 0.5,
					resizeMode: 'contain'
				}}
			/>
			<Text
				style={[
					layoutStyles.centerText,
					textStyles.textCenter,
					textStyles.bodyContentText,
					spacingStyles.marginTop16
				]}
			>
				{ERROR_TEXT[errorType]}
			</Text>
			<Button
				style={spacingStyles.marginTop36}
				buttonText={ERROR_BTN_TEXT[errorType]}
				onPress={handlePressBtn}
			/>
		</View>
	)
}

export default Error
