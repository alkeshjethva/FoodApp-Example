import React from 'react';
import { View, Dimensions, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
const LandingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#259f6c'} />

            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require('./images/ReactNative.jpg')}
                    resizeMode={"stretch"}
                    style={styles.logo} />
            </View>

            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text}>Getting Started With Food App</Text>
                <Text style={styles.text1}>Your daily stop</Text>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('SignInScreen')}>
                    <View style={styles.btnView}>
                        <Text style={styles.getStartedText}>Get Started </Text>
                        <MaterialIcons
                            name="navigate-next"
                            color={'#FFFFFF'}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

export default LandingScreen

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#259f6c'
    },

    header: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,

    },

    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 100
    },

    Btn: {
        backgroundColor: '#259f6c',
        width: 140,
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    getStartedText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
    },
    btnView: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        fontSize: 30,
        fontFamily: 'Poppins-Medium',
    },

    text1: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
    }
})