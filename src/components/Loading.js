import { ActivityIndicator, View, Dimensions, Text } from 'react-native'

import colors from '../decorations/colors'
import layoutStyles from '../decorations/styles/layoutStyles'
import textStyles from '../decorations/styles/textStyles'
import spacingStyles from '../decorations/styles/spacingStyles'

const { height } = Dimensions.get('window')

/**
 * This function returns the loading component that is displayed while the app is loading data.
 * 
 * @returns {JSX.Element} The loading component.
 */

const Loading = () => {
	return (
		<View style={[layoutStyles.center, { height }]}>
			<ActivityIndicator size='large' color={colors.primary} />
			<Text
				style={[
					layoutStyles.centerText,
					textStyles.bodyContentText,
					spacingStyles.marginTop16
				]}
			>
				Please Be Patient :)
			</Text>
		</View>
	)
}

export default Loading
