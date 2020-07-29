import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const HomeStack = createStackNavigator()
const DetaileStack = createStackNavigator()
const Drawer = createDrawerNavigator()

import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../HomeScreen'
import DetaileScreen from '../DetaileScreen'

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#303030'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                headerLeft: () => (
                    <Ionicons name="ios-menu" size={25} color="#FFFFFF" style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} />
                )
            }} />
        </HomeStack.Navigator>
    )
}

const DetaileStackScreen = () => {
    return (
        <DetaileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <DetaileStack.Screen name="Detaile" component={DetaileScreen} />
        </DetaileStack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeScreen" drawerType={"slide"}>
                <Drawer.Screen name="HomeScreen" component={HomeStackScreen} />
                <Drawer.Screen name="DetaileScreen" component={DetaileStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}



export default App