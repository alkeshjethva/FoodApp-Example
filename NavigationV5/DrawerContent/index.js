import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../components/context'


export const DrawerContent = (props) => {

    const paperTheme = useTheme()

    const { signOut, toggleTheme } = useContext(AuthContext)

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.useInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Avatar.Image
                                source={require('./images/ReactNative.jpg')}
                                size={50}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Title style={styles.title}>Alkesh Jethava</Title>
                                <Caption style={styles.caption}>@itsalkesh</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    10k
                                </Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    2M
                                </Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => props.navigation.navigate('Home')}


                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => props.navigation.navigate('Profile')}


                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Bookmark"
                            onPress={() => props.navigation.navigate('BookmarkScreen')}


                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Setting"
                            onPress={() => props.navigation.navigate('SettinggScreen')}


                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => props.navigation.navigate('SupportScreen')}


                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={styles.preferance}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents={"none"}>
                                    <Switch value={paperTheme.dark} />

                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => signOut()}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    useInfoSection: {
        paddingLeft: 20,
    },

    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,

    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },

    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,

    },

    drawerSection: {
        marginTop: 15
    },

    bottomDrawerSection: {
        // marginBottom: 10,
        borderTopWidth: 1
    },

    preferance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})