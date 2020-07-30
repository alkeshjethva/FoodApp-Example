import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from '../LandingScreen'
import SignInScreen from '../SignInScreen'
import SignUpScreen from '../SignUpScreen'


const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="LandingScreen" component={LandingScreen} />
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </RootStack.Navigator>
    )
}

export default RootStackScreen