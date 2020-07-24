import React from 'react';
import DrawerContent from '../DrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SettingScreen from '../../../screens/DrawerScreens/SettingScreen';
import SupportScreen from '../../../screens/DrawerScreens/SupportScreen';
import HomeScreen from '../../../screens/HomeScreen';

import BottomTabNavigation from '../../BottomTabNavigation'

import { createStackNavigator } from '@react-navigation/stack';


const bottomStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            drawerType="slide"
            initialRouteName='Home'>
            <Drawer.Screen name="Support" component={BottomTabNavigation} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
    )
}


export default DrawerNavigation
