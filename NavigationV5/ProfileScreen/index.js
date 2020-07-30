import React from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import Header from '../CustomComponents/Header';
import CustomTextInput from '../CustomComponents/CustomTextInput';
import { ScrollView } from 'react-native-gesture-handler';



const Profile = ({ navigation }) => {


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ flex: 1 }}>
                <View>
                    <Header
                        title="Profile"
                        onPressLeft={() => navigation.openDrawer()}
                        alignItems="center"
                        RightSource={require('./Images/threeDotss.png')}
                    />
                    <View style={styles.profileView}>
                        <View style={styles.profileImageView}>
                            <Image source={require('./Images/ReactNative.jpg')} style={styles.profileImage} />
                        </View>
                    </View>
                    <CustomTextInput placeholder="Alkesh" />
                    <CustomTextInput placeholder="7046737008" keyboardType={"number-pad"} maxLength={10} />
                    <CustomTextInput placeholder="alkeshjethava@gmail.com" />
                    <CustomTextInput placeholder="************" secureTextEntry />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default Profile

const styles = StyleSheet.create({

    profileImageView: {
        alignItems: 'center',
        marginVertical: 20
    },

    profileImage: {
        height: 120,
        width: 120,
        borderRadius: 100
    }
})