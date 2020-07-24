import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const ManuScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchView}>
                <View style={styles.searchIcon}>
                    <FontAwesomeIcon
                        icon={faSearch}
                        color={'silver'}
                    />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Search '}
                    placeholderTextColor={'silver'} />
            </View>

        </View>
    )
}

export default ManuScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
    },

    searchView: {
        flexDirection: 'row',
        margin: 15,
    },

    searchIcon: {
        flex: 1,
        backgroundColor: '#303030',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    },

    textInput: {
        flex: 9,
        backgroundColor: '#303030',
        fontSize: 18,
        paddingLeft: 10,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5

    }
})