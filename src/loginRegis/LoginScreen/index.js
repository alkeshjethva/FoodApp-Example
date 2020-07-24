import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, StatusBar, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
const LoginScreen = ({ navigation }) => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: true,
        secureTextEntry: true
    })

    const textInputChange = (val) => {
        if (val.length === 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSacureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#212121'} />

            <View style={styles.header}>
                <Text style={styles.text}>Welcome!</Text>
            </View>

            <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={1000} >
                <Text style={styles.text1}>Email</Text>
                <View style={styles.textInputView}>
                    <FontAwesome
                        name="user-o"
                        color="silver"
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Name"
                        placeholderTextColor="silver"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {
                        data.check_textInputChange ?
                            null :
                            <Animatable.View
                                animation='bounceIn'
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>


                    }
                </View>

                <Text style={[styles.text1, { marginTop: 20 }]}>Password</Text>
                <View style={styles.textInputView}>
                    <FontAwesome
                        name="lock"
                        color="silver"
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Password"
                        placeholderTextColor="silver"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />

                    <TouchableOpacity onPress={updateSacureTextEntry}>
                        {
                            data.secureTextEntry ?
                                <Feather
                                    name="eye"
                                    color="gray"
                                    size={20}
                                /> :
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />
                        }
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.BtnSignIn} onPress={() => navigation.navigate('BottomTabNavigation')}>
                    <Text style={styles.signIn}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnSignUp} onPress={() => navigation.navigate('RegistrationScreen')}>
                    <Text style={styles.signUp}>SignUp</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

export default LoginScreen

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121'
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    footer: {
        flex: 3,
        backgroundColor: '#303030',
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



    btnView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        color: 'lightblue',
        fontSize: 30,
        letterSpacing: 1,
        fontFamily: 'Poppins-Medium',
    },

    text1: {
        color: '#FFFFFF',
        fontSize: 18,
        letterSpacing: 1,
        fontFamily: 'Poppins-Medium',
    },













    textInputView: {
        marginTop: 10,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: 'silver',
    },
    textInput: {
        flex: 1,
        marginTop: -10,
        paddingHorizontal: 20,
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
    },
    signIn: {
        color: '#212121',
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        fontSize: 18
    },

    BtnSignIn: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 25,
        alignItems: 'center'
    },

    signUp: {
        color: 'lightblue',
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        fontSize: 18
    },


    BtnSignUp: {
        padding: 10,
        borderRadius: 5,
        marginTop: 25,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightblue'
    },
})
