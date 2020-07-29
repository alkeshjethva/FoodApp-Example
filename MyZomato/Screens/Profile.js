import React from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../Components/Header';
import { styles } from '../Styles';
import CustomTextInput from '../Components/CustomTextInput';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ flex: 1, backgroundColor: '#212121' }}>
                <View>
                    <Header onPressOpen={() => navigation.openDrawer()} name={"Profile"} />
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