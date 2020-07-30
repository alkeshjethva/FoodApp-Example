import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, StatusBar, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
import { ScrollView } from 'react-native-gesture-handler';
const SignUpScreen = ({ navigation }) => {

    const [data, setData] = useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: true,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
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

    //  password
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



    // confirm password
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        })
    }


    const updateConfirmSacureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }


    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <Text style={styles.text}>Register Now!</Text>
            </View>

            <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={1000} >
                <Text style={styles.text1}>Email</Text>
                <View style={styles.textInputView}>
                    <FontAwesome
                        name="user-o"
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Name"
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

                <Text style={[styles.text1, { marginTop: 20 }]}>Confirm Password</Text>
                <View style={styles.textInputView}>
                    <FontAwesome
                        name="lock"
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Confirm Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />

                    <TouchableOpacity onPress={updateConfirmSacureTextEntry}>
                        {
                            data.confirm_secureTextEntry ?
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
                <TouchableOpacity style={styles.BtnSignIn} onPress={() => alert("DONE")}>
                    <Text style={styles.signIn}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnSignUp} onPress={() => navigation.goBack()}>
                    <Text style={styles.signUp}>SignIn</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

export default SignUpScreen

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
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF'
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
        fontSize: 30,
        letterSpacing: 1,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF'

    },

    text1: {
        fontSize: 18,
        letterSpacing: 1,
        fontFamily: 'Poppins-Medium',
        color: '#000'
    },













    textInputView: {
        marginTop: 10,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
    },
    textInput: {
        flex: 1,
        marginTop: -10,
        paddingHorizontal: 20,
        fontSize: 15,
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
})
