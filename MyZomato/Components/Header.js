import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { styles } from '../Styles';


const Header = (props) => {
    return (
        <View>
            <StatusBar backgroundColor={'#303030'} />
            <View style={styles.headerView2}>
                <View style={styles.flexDirectionHeader}>
                    <View>
                        <Text style={styles.headerText3}> {props.name}</Text>
                    </View>
                    <TouchableOpacity onPress={props.onPressOpen}>
                        <Image source={require('../Images/icon.png')} style={styles.drawerManu} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Header


