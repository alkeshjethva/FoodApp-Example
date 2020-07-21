import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

const Notifivation = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#212121' }}>
            <Header onPressOpen={() => navigation.openDrawer()} name={"Notification"} />
        </View>
    )
}

export default Notifivation