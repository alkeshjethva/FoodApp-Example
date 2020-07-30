
import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'

const HeaderComponent = (props) => {
    const { colors } = useTheme()
    const theme = useTheme();
    return (
        <View style={{ borderBottomWidth: 0.5, backgroundColor: colors.background }}>
            <StatusBar backgroundColor={colors.background} barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerLeft} onPress={props.onPressLeft}>
                    <Image source={props.leftSource} style={[styles.headerLeftImage, { tintColor: colors.text }]} />
                </TouchableOpacity>
                <View style={[styles.headerCenter, { alignItems: props.alignItems }]} >
                    <Text style={[styles.headerCenterText, { color: colors.text }]}>{props.title}</Text>
                </View>
                <TouchableOpacity style={styles.headerRight} onPress={props.onRightPress}>
                    <Image source={props.RightSource} style={[styles.headerRightImage, { tintColor: colors.text }]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({

    headerView: {
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },



    // Header left
    headerLeft: {
        flex: 1,
        padding: 10,
    },

    headerLeftImage: {
        height: 35,
        width: 30
    },


    // Header center
    headerCenter: {
        flex: 8,
        justifyContent: 'center',
    },

    headerCenterText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 25
    },


    // Header Right

    headerRight: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    headerRightImage: {
        tintColor: '#000',
        height: 25,
        width: 30
    }
})