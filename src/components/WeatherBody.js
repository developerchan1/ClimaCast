import { Text, Image, View, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import Button from './Button'
import WeatherDate from './WeatherDate'
import WeatherLocation from './WeatherLocation'
import InformationRowSection from './InformationRowSection'

import spacingStyles from '../decorations/styles/spacingStyles'
import textStyles from '../decorations/styles/textStyles'
import layoutStyles from '../decorations/styles/layoutStyles'

import { dayGradientColors } from '../utils/categorizeDay'
import {
	percentageFormatter,
	pressureFormatter,
	temperatureFormatter,
	timeFormatter,
	visibilityFormatter,
	windSpeedFormatter
} from '../utils/formatter'

const { width } = Dimensions.get('window')

/**
 * A React component that represents infomations of weather.
 * It displays the weather information, and allows the user to go to the next screen.
 * 
 * @param {object} props - The props passed to the component
 * @param {object} props.data - The data to display
 * @param {boolean} [props.isForecast=false] - Whether the weather is a forecast
 * @param {object} [props.location] - The location of the weather (longitude and latitude)
 * @return {JSX.Element} - A React element that renders the body of the screen
 */
const WeatherBody = ({ data, isForecast = false, location }) => {
	const navigation = useNavigation()
	const gradientColors = dayGradientColors(data.dt * 1000)

	const weatherBodyInfo = [
		{
			leftImgSrc: require('../assets/images/feel-like.png'),
			leftLabel: 'Feel like',
			leftValue: temperatureFormatter(data.main.feels_like),
			rightImgSrc: require('../assets/images/humidity.png'),
			rightLabel: 'Humidity',
			rightValue: percentageFormatter(data.main.humidity)
		},
		{
			leftImgSrc: require('../assets/images/precipitation.png'),
			leftLabel: 'Precipitation',
			leftValue: percentageFormatter(isForecast ? data.pop * 100 : '-'),
			rightImgSrc: require('../assets/images/wind.png'),
			rightLabel: 'Wind',
			rightValue: windSpeedFormatter(data.wind.speed)
		},
		{
			leftImgSrc: require('../assets/images/visibility.png'),
			leftLabel: 'Visibility',
			leftValue: visibilityFormatter(data.visibility),
			rightImgSrc: require('../assets/images/pressure.png'),
			rightLabel: 'Pressure',
			rightValue: pressureFormatter(data.main.pressure)
		}
	]

	// add sunrise and sunset to the beginning for main screen
	if (!isForecast) weatherBodyInfo.unshift({
		leftImgSrc: require('../assets/images/sunrise.png'),
		leftLabel: 'Sunrise',
		leftValue: timeFormatter(data.sys.sunrise * 1000),
		rightImgSrc: require('../assets/images/sunset.png'),
		rightLabel: 'Sunset',
		rightValue: timeFormatter(data.sys.sunset * 1000)
	})

	const handleGoToForecastList = () => navigation.navigate('ForecastList', { location })

	return (
		<LinearGradient
			colors={gradientColors}
			style={spacingStyles.paddingTop48}
		>
			<View style={[layoutStyles.alignCenter, spacingStyles.marginBottom36]}>
			{
				!isForecast
					? <WeatherLocation locationName={data.name} />
					: <></>
			}
			<Image
				style={styles.weatherImage}
				source={{
					uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
				}}
			/>
			<WeatherDate timestamp={data.dt * 1000} />
			<Text style={textStyles.headingText}>{temperatureFormatter(data.main.temp)}</Text>
			<Text style={textStyles.bodyTitleText}>{data.weather[0].main}</Text>
			{
				!isForecast
					? <Button
						style={spacingStyles.marginTop36}
						buttonText='See Forecast'
						onPress={handleGoToForecastList}
						showRightArrowIcon
					/>
					: <></>
			}
			</View>
			{
				weatherBodyInfo.map((e, index) => <InformationRowSection key={`section-${index}`} {...e} />)
			}
		</LinearGradient>
	)
}

export default WeatherBody

const styles = StyleSheet.create({
	weatherImage: {
		width: width * 0.4,
		height: width * 0.4
	}
})
