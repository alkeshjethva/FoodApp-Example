import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor="#303030" />
            <View style={{ flex: 1, backgroundColor: '#212121' }}>
                <Text style={{ color: '#FFFFFF' }}> Home </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Detaile')}
                    style={{
                        backgroundColor: 'lightblue',
                        padding: 10,
                        margin: 20
                    }}>
                    <Text>Detaile</Text>
                </TouchableOpacity>
            </View>
        </>

    );
}

export default HomeScreen