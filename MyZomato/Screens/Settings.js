import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

const Settings = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#212121' }}>
            <Header onPressOpen={() => navigation.openDrawer()} name={"Settings"} />
        </View>
    )
}

export default Settings