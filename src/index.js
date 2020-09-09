import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SigninScreen from './screens/auth/SigninScreen';
import SignupScreen from './screens/auth/SignupScreen'
import MainAuth from './screens/auth'

const Stack = createStackNavigator();
const MainAppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainAuth' headerMode='none'>
                <Stack.Screen
                    name='MainAuth'
                    component={MainAuth}
                />
                <Stack.Screen
                    name='SigninScreen'
                    component={SigninScreen}
                />
                <Stack.Screen
                    name='SignupScreen'
                    component={SignupScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppNavigator
