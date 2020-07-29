import React, { Component } from 'react';
import Settings from '../../Screens/Settings'
import Profile from '../../Screens/Profile'
import Notification from '../..//Screens/Notification'
import DrawerContent from '../../Navigation/Drawer/DrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../../Screens/Home';
import DashBoard from '../../Screens/DashBoard/DashBoard'
import LandingScreen from '../../LoginRegis/Registration/LandingScreen';
import SignInScreen from '../../LoginRegis/Registration/SignInScreen';
import SignUpScreen from '../../LoginRegis/Registration/SignUpScreen';

const Drawer = createDrawerNavigator();

export default class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={props => <DrawerContent {...props} />}
                    drawerType="slide"
                    drawerPosition={"right"}
                    initialRouteName='LandingScreen'
                >
                    <Drawer.Screen name="Manu" component={Home} />
                    <Drawer.Screen name="DashBoard" component={DashBoard} />
                    <Drawer.Screen name="Settings" component={Settings} />
                    <Drawer.Screen name="Notification" component={Notification} />
                    <Drawer.Screen name="Profile" component={Profile} />


                    <Drawer.Screen name="LandingScreen" component={LandingScreen} />
                    <Drawer.Screen name="SignInScreen" component={SignInScreen} />
                    <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />

                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
