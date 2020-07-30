import React, { useState, useEffect, useMemo, useReducer } from 'react';
import { ActivityIndicator, View } from 'react-native';

import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AuthContext } from '../components/context'

const Drawer = createDrawerNavigator()
import BottomNavigation from '../BottomNavigation'
import SettinggScreen from '../SettingScreen'
import SupportScreen from '../SupportScreen'
import BookmarkScreen from '../BookMarkScreen'
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefauliTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper'
import { DrawerContent } from '../DrawerContent'

import RootStackScreen from '../RootStackScreen'

import AsyncStorage from '@react-native-community/async-storage'

const Navigation = () => {

    // const [isLoading, setIsLoading] = useState(true)
    // const [userToken, setUserToken] = useState(null)

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null
    }

    const customeDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefauliTheme,

        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefauliTheme.colors,
            background: '#ffffff',
            text: '#333333'
        }
    }

    const customeDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,

        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: '#333333',
            text: '#ffffff'
        }
    }

    const theme = isDarkTheme ? customeDarkTheme : customeDefaultTheme

    const loginReducer = (state, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN': return {
                ...state,
                userToken: action.token,
                isLoading: false
            }
            case 'LOGIN': return {
                ...state,
                userName: action.id,
                userToken: action.token,
                isLoading: false
            }
            case 'LOGOUT': return {
                ...state,
                userName: null,
                userToken: null,
                isLoading: false
            }
            case 'REGISTRATION': return {
                ...state,
                userName: action.id,
                userToken: action.token,
                isLoading: false
            }
        }
    }

    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

    const authContext = useMemo(() => ({
        signIn: async (foundUser) => {
            // setUserToken('alkesh')
            // setIsLoading(false)
            // let userToken;
            const userToken = String(foundUser[0].userToken)
            const userName = foundUser[0].username
            try {
                await AsyncStorage.setItem('userToken', userToken)
            } catch (e) {
                console.log(e)
            }
            dispatch({ type: 'LOGIN', id: userName, token: userToken })
        },
        signOut: async () => {
            // setUserToken(null)
            // setIsLoading(false)
            try {
                await AsyncStorage.removeItem('userToken')
            } catch (e) {
                console.log(e)
            }
            dispatch({ type: 'LOGOUT' })

        },
        signUp: () => {
            setUserToken('alkesh')
            setIsLoading(false)
        },
        toggleTheme: () => {
            setIsDarkTheme(isDarkTheme => !isDarkTheme)
        }
    }))

    useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false)
            // let userToken;
            // userToken = null
            try {
                userToken = await AsyncStorage.getItem('userToken')
            } catch (e) {
                console.log(e)
            }
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })

        }, 1000)
    }, [])

    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FFF" />
            </View>
        )
    }

    return (
        <PaperProvider theme={theme}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer theme={theme}>
                    {
                        loginState.userToken !== null ? (
                            <Drawer.Navigator initialRouteName="HomeScreen" drawerType={"slide"} drawerContent={props => <DrawerContent {...props} />}>
                                <Drawer.Screen name="HomeScreen" component={BottomNavigation} />
                                <Drawer.Screen name="SettinggScreen" component={SettinggScreen} />
                                <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                                <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
                            </Drawer.Navigator>
                        ) :
                            <RootStackScreen />
                    }
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    )
}

export default Navigation

