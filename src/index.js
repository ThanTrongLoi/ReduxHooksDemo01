import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SigninScreen from './screens/auth/SigninScreen';

const Stack = createStackNavigator();
const MainAppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SigninScreen'>
                <Stack.Screen
                    name='SigninScreen'
                    component={SigninScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppNavigator
