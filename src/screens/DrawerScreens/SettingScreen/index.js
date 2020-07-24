import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderComponent from '../../../Components/HeaderComponent'

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent title={'Settings'} alignItems={'center'} />
        </View>
    );
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121'
    }
})