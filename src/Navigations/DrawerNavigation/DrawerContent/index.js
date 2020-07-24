import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DrawerContent = ({ navigation }) => {

    const onCloseDrawer = () => {
        navigation.closeDrawer()
        navigation.navigate('Home')
    }

    return (
        <View style={styles.drawerContainer} >
            <View style={{ flex: 1, marginTop: 10 }}>

                <TouchableOpacity style={styles.DrawerList} onPress={() => navigation.navigate('SettingScreen')} >
                    <Text style={styles.DrawerListText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.DrawerList} onPress={() => navigation.navigate('SupportScreen')} >
                    <Text style={styles.DrawerListText}>Supports</Text>
                </TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                        <Text style={styles.DrawerFooter}>Log Out</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.DrawerFooter}>www.foods.com</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DrawerContent


const styles = StyleSheet.create({

    drawerContainer: {
        flex: 1,
        backgroundColor: '#212121',
        padding: 20
    },

    DrawerText: {
        fontSize: 20,
        color: 'silver',

    },

    DrawerList: {
        backgroundColor: '#303030',
        padding: 15,
        borderRadius: 5,
        marginVertical: 8
    },

    DrawerListText: {
        color: 'silver',
        fontFamily: 'Poppins-Medium',
    },

    DrawerFooter: {
        color: 'silver',
        fontFamily: 'Poppins-Medium',
    },
})