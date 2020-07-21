import React, { Component } from 'react';
import Settings from '../../Screens/Settings'
import Profile from '../../Screens/Profile'
import Notification from '../..//Screens/Notification'
import DrawerContent from '../../Navigation/Drawer/DrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../../Screens/Home';
import DashBoard from '../../Screens/DashBoard/DashBoard'

const Drawer = createDrawerNavigator();

export default class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={props => <DrawerContent {...props} />}
                    drawerType="slide"
                    drawerPosition={"right"}
                    initialRouteName='Home'
                >
                    <Drawer.Screen name="Home" component={Home} />
                    {/* <Drawer.Screen name="DashBoard" component={DashBoard} /> */}
                    <Drawer.Screen name="Settings" component={Settings} />
                    <Drawer.Screen name="Notification" component={Notification} />
                    <Drawer.Screen name="Profile" component={Profile} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
