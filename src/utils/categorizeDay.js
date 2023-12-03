import colors from '../decorations/colors'

export const PART_OF_THE_DAY = {
	MORNING: 'Morning',
	AFTERNOON: 'Afternoon',
	EVENING: 'Evening',
}

export const categorizeDay = (timestamp) => {
	const date = new Date(timestamp)
	if (date.getHours() > 5 && date.getHours() <= 12) return PART_OF_THE_DAY.MORNING
	if (date.getHours() > 12 && date.getHours() <= 18) return PART_OF_THE_DAY.AFTERNOON
	else PART_OF_THE_DAY.EVENING
}

export const dayGradientColors = (timestamp) => {
	const dayType = categorizeDay(timestamp)
	return (
		dayType === PART_OF_THE_DAY.MORNING
			? [colors.morningGradient1, colors.morningGradient2, 'transparent']
			: dayType === PART_OF_THE_DAY.AFTERNOON
				? [colors.afternoonGradient1, colors.afternoonGradient2, 'transparent']
				: [colors.eveningGradient1, colors.eveningGradient2, 'transparent']
	)
}