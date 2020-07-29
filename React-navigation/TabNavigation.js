import * as React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const CustomHeader = ({ title, isHome, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 50, }}>
            {
                isHome ?
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={require('./images/menu.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', marginLeft: 5, alignItems: 'center' }} >
                        <Image source={require('./images/back.png')} style={{ width: 20, height: 20 }} />
                        <Text>back</Text>
                    </TouchableOpacity>
            }

            <View style={{ flex: 8, justifyContent: 'center' }} >
                <Text style={{ textAlign: 'center' }} >{title}</Text>
            </View>
            <View style={{ flex: 1, }} ></View>
        </View>
    )
}


function HomeScreen({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, }}>
                <CustomHeader title="Home" isHome={true} navigation={navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    <Text>Home!</Text>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('HomeDetaile')}>
                        <Text>Go Home Detaile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

function HomeScreenDetaile({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, }}>
                <CustomHeader title="Home Detaile" navigation={navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Detaile!</Text>
                </View>
            </View>
        </>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, }}>
                <CustomHeader title="Settings" isHome={true} navigation={navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Settings!</Text>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SettingDetaile')}>
                        <Text>Go Settings Detaile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

function SettingsScreenDetaile({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, }}>
                <CustomHeader title="Settings Detaile" navigation={navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Settings Detaile!</Text>
                </View>
            </View>
        </>
    );
}


function NotificationsScreen({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, }}>
                <CustomHeader title="Notification Detaile" navigation={navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Notification Detaile!</Text>
                </View>
            </View>
        </>
    );
}

function RegisterScreen({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, }}>
                <CustomHeader title="Register Screen" navigation={navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Register Screen!</Text>
                </View>
            </View>
        </>
    );
}

function LoginScreen({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Login Screen!</Text>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('HomeApp')}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Register')}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const CustomeDrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('./images/profile.png')} style={{ height: 80, width: 80 }} />
            </View>
            <ScrollView>
                <TouchableOpacity style={{ margin: 20 }} onPress={() => props.navigation.navigate('MenuTab')}>
                    <Text>Menu Tab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20 }} onPress={() => props.navigation.navigate('NotificationsScreen')}>
                    <Text>Notifications</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const Tab = createBottomTabNavigator();

const navOptionHandler = () => {
    return {
        headerShown: false
    }
}

const StackHome = createStackNavigator()


const homeStack = () => {
    return (
        <StackHome.Navigator initialRouteName="Home">
            <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
            <StackHome.Screen name="HomeDetaile" component={HomeScreenDetaile} options={navOptionHandler} />
        </StackHome.Navigator>
    )
}

const StackSetting = createStackNavigator()


const settingStack = () => {
    return (
        <StackSetting.Navigator initialRouteName="Setting">
            <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
            <StackSetting.Screen name="SettingDetaile" component={SettingsScreenDetaile} options={navOptionHandler} />
        </StackSetting.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? require('./images/home-black.png')
                            : require('./images/home.png')
                    } else if (route.name === 'Settings') {
                        iconName = focused ?
                            require('./images/setting-black.png')
                            :
                            require('./images/settings.png')
                    }

                    // You can return any component that you like here!
                    return <Image source={iconName} style={{ width: 20, height: 20 }} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#000',
                inactiveTintColor: 'gray',
            }}

        >
            <Tab.Screen name="Home" component={homeStack} />
            <Tab.Screen name="Settings" component={settingStack} />
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomeDrawerContent(props)}>
            <Drawer.Screen name="MenuTab" component={TabNavigator} />
            <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
        </Drawer.Navigator>
    )
}

const StackApp = createStackNavigator()

export default function App() {

    return (
        <NavigationContainer>
            <StackApp.Navigator initialRouteName="Login">
                <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
                <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
                <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
            </StackApp.Navigator>
        </NavigationContainer>
    );
}