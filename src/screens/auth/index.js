import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';

const Tab = createMaterialTopTabNavigator();
const MainAuth = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Đăng nhập'
                component={SigninScreen}
            />
            <Tab.Screen
                name='Đăng Ký'
                component={SignupScreen}
            />
        </Tab.Navigator>
    )
}

export default MainAuth
