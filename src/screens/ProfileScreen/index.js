import React from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import TextInputComponent from '../../Components/TextInputComponent';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ flex: 1, backgroundColor: '#212121' }}>
                <View>
                    <HeaderComponent onPressLeft={() => navigation.openDrawer()} title={"Profile"} alignItems={'center'} RightSource={require('./Images/threeDotss.png')} />
                    <View style={styles.profileView}>
                        <View style={styles.profileImageView}>
                            <Image source={require('./Images/ReactNative.jpg')} style={styles.profileImage} />
                        </View>
                    </View>
                    <TextInputComponent placeholder="Alkesh" />
                    <TextInputComponent placeholder="7046737008" keyboardType={"number-pad"} maxLength={10} />
                    <TextInputComponent placeholder="alkeshjethava@gmail.com" />
                    <TextInputComponent placeholder="************" secureTextEntry />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default ProfileScreen

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