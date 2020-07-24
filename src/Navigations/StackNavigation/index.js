import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../../loginRegis/LandingScreen'
import LoginScreen from '../../loginRegis/LoginScreen'
import RegistrationScreen from '../../loginRegis/RegistrationScreen'

import BottomTabNavigation from '../BottomTabNavigation'

const Stack = createStackNavigator();

function Navigations() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
            <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
        </Stack.Navigator>
    );
}

export default Navigations;
