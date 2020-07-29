import React from 'react';
import { View, Text, Button } from 'react-native';

const Detaile = ({ navigation }) => {
    return (
        <View>
            <Text> Detaile </Text>
            <Button title="Detaile" onPress={() => navigation.navigate('Home')} />

        </View>
    );
}

export default Detaile