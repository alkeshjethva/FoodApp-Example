import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderComponent from '../../../Components/HeaderComponent'

const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent title={'Support'} alignItems={'center'} />
        </View>
    );
}

export default SupportScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121'
    }
})