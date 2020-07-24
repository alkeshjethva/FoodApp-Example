import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faBell, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

import HomeScreen from '../../screens/HomeScreen'
import SearchScreen from '../../screens/SearchScreen'
import NotificationScreen from '../../screens/NotificationScreen'
import ProfileScreen from '../../screens/ProfileScreen'


const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigation() {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: '#212121' }}
            labeled={false}

        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}

                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faHome} color={'lightblue'} size={26} />
                    ),
                    tabBarAccessibilityLabel: '',
                    tabBarBadge: true
                }}
            />

            <Tab.Screen
                name="Manu"
                component={SearchScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faSearch} color={'lightblue'} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faBell} color={'lightblue'} size={26} />
                    ),
                    tabBarBadge: 15,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faUser} color={'lightblue'} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation