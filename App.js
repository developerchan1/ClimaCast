import { useCallback } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { store } from './src/redux/store'
import AppNavigator from './src/navigation/AppNavigator'
import layoutStyles from './src/decorations/styles/layoutStyles'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Italic': require('./src/assets/fonts/PlusJakartaSans-Italic.ttf'),
    'PlusJakartaSans-Regular': require('./src/assets/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Medium': require('./src/assets/fonts/PlusJakartaSans-Medium.ttf'),
    'PlusJakartaSans-SemiBold': require('./src/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'PlusJakartaSans-Bold': require('./src/assets/fonts/PlusJakartaSans-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={layoutStyles.flexFull} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </View>
  )
}
