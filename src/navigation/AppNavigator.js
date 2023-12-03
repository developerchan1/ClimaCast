import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../screens/MainScreen'
import ForecastListScreen from '../screens/ForecastListScreen'
import ForecastDetailScreen from '../screens/ForecastDetailScreen'

const Stack = createNativeStackNavigator()

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Main' component={MainScreen} />
      <Stack.Screen name='ForecastList' component={ForecastListScreen} />
      <Stack.Screen name='ForecastDetail' component={ForecastDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppNavigator
