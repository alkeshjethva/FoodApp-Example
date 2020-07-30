import React, { useState, useContext } from 'react';
import { View, Dimensions, StyleSheet, StatusBar, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'

import { AuthContext } from '../components/context'

import Users from '../Model/Users'

const SignInScreen = ({ navigation }) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: true,
        secureTextEntry: true,

        isValidUser: true,
        isValidPassword: true
    })

    const { signIn } = useContext(AuthContext)

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            })
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            })
        }

    }

    const updateSacureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }
    }

    const loginHandler = (userName, password) => {

        const foundUser = Users.filter(item => {
            return userName === item.username && password === item.password
        })

        if (data.username.length === 0 || data.password.length === 0) {
            Alert.alert('Wrong Input', 'username or field cant be empty', [{ text: 'okay' }]);
            return;
        }

        if (foundUser.length === 0) {
            Alert.alert('Invalid User', 'username or password incorrect', [{ text: 'okay' }]);
            return;
        }

        signIn(foundUser)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#212121'} />

            <View style={styles.header}>
                <Text style={styles.text}>Welcome!</Text>
            </View>

            <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={1000} >
                <Text style={styles.text1}>username</Text>
                <View style={styles.textInputView}>
                    <FontAwesome
                        name="user-o"
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Name"
                        onChangeText={(val) => textInputChange(val)}
                        autoCapitalize="none"
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
                {
                    data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>username must be 4 character long</Text>
                        </Animatable.View>
                }


                <Text style={[styles.text1, { marginTop: 20 }]}>Password</Text>
                <View style={styles.textInputView}>
                    <FontAwesome
                        name="lock"
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />

                    <TouchableOpacity onPress={updateSacureTextEntry}>
                        {
                            data.secureTextEntry ?
                                <Feather
                                    name="eye"
                                    size={20}
                                /> :
                                <Feather
                                    name="eye-off"
                                    size={20}
                                />
                        }
                    </TouchableOpacity>

                </View>
                {
                    data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>password must be 8 character long</Text>
                        </Animatable.View>
                }

                <TouchableOpacity style={styles.BtnSignIn} onPress={() => loginHandler(data.username, data.password)}>
                    <Text style={styles.signIn}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnSignUp} onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.signUp}>SignUp</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

export default SignInScreen

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#259f6c'
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    footer: {
        flex: 3,
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



    btnView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        color: '#FFFFFF',
        fontSize: 30,
        letterSpacing: 1,
        fontFamily: 'Poppins-Medium',
    },

    text1: {
        color: '#000',
        fontSize: 18,
        letterSpacing: 1,
        fontFamily: 'Poppins-Medium',
    },













    textInputView: {
        marginTop: 10,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        // borderBottomColor: '',
    },
    textInput: {
        flex: 1,
        marginTop: -10,
        paddingHorizontal: 20,
        color: '#000',
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
    },
    signIn: {
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        fontSize: 18
    },

    BtnSignIn: {
        backgroundColor: '#259f6c',
        padding: 10,
        borderRadius: 5,
        marginTop: 25,
        alignItems: 'center'
    },

    signUp: {
        color: '#259f6c',
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
        borderColor: '#259f6c'
    },

    errorMsg: {
        color: 'red'
    }
})
