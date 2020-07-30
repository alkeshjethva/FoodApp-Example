import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faBell, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const NotificationStack = createStackNavigator()
const ProfileStack = createStackNavigator()

import Ionicons from 'react-native-vector-icons/Ionicons'

import { useTheme } from '@react-navigation/native'


import HomeScreen from '../HomeScreen'
import SearchScreen from '../SearchScreen'
import NotificationScreen from '../NotificationScreen'
import ProfileScreen from '../ProfileScreen'

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
    const { colors } = useTheme()

    return (
        <Tab.Navigator
            initialRouteName="Home"
            labeled={false}

        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}

                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faHome} size={26} color={colors.text} />
                    ),
                    tabBarAccessibilityLabel: '',
                    tabBarBadge: true,
                    tabBarColor: colors.background
                }}
            />

            <Tab.Screen
                name="Search"
                component={SearchStackScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faSearch} size={26} color={colors.text} />
                    ),
                    tabBarColor: colors.background

                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStackScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faBell} size={26} color={colors.text} />
                    ),
                    tabBarBadge: 15,
                    tabBarColor: colors.background

                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faUser} size={26} color={colors.text} />
                    ),
                    tabBarColor: colors.background

                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,

        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

const SearchStackScreen = ({ navigation }) => {
    return (
        <SearchStack.Navigator screenOptions={{ headerShown: false }}>
            <SearchStack.Screen name="Search" component={SearchScreen} options={{
                headerLeft: () => (
                    <Ionicons name="ios-menu" size={25} color="#000000" style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />
                )
            }} />
        </SearchStack.Navigator>
    )
}

const NotificationStackScreen = ({ navigation }) => {
    return (
        <NotificationStack.Navigator screenOptions={{ headerShown: false }}>
            <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{
                headerLeft: () => (
                    <Ionicons name="ios-menu" size={25} color="#000000" style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />
                )
            }} />
        </NotificationStack.Navigator>
    )
}


const ProfileStackScreen = ({ navigation }) => {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
                headerLeft: () => (
                    <Ionicons name="ios-menu" size={25} color="#000000" style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />
                )
            }} />
        </ProfileStack.Navigator>
    )
}

