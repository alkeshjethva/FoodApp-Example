import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import { useTheme } from '@react-navigation/native'

const ManuScreen = () => {


    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <View style={styles.searchView}>
                <View style={[styles.searchIcon, { backgroundColor: theme.dark ? 'gray' : '#e4e4e4' }]}>
                    <FontAwesomeIcon
                        icon={faSearch}
                        color={theme.dark ? '#303030' : 'gray'}
                    />
                </View>
                <TextInput
                    style={[styles.textInput, { backgroundColor: theme.dark ? 'gray' : '#e4e4e4' }]}
                    placeholder={'Search'}
                    placeholderTextColor={theme.dark ? '#303030' : 'gray'}
                />
            </View>

        </View>
    )
}

export default ManuScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    searchView: {
        flexDirection: 'row',
        margin: 15,
    },

    searchIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    },

    textInput: {
        flex: 9,
        backgroundColor: '#eeeeee',
        fontSize: 18,
        paddingLeft: 10,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5

    }
})