import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MainAppNavigator from './src'
import SigninScreen from './src/screens/auth/SigninScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <MainAppNavigator />
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

console.disableYellowBox = true