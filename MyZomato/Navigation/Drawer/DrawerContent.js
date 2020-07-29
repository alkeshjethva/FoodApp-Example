import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DrawerContent = ({ navigation }) => {

    onCloseDrawer = () => {
        navigation.closeDrawer()
        navigation.navigate('Home')
    }

    return (
        <View style={styles.drawerContainer} >
            <View >
                <TouchableOpacity onPress={onCloseDrawer}  >
                    <Text style={styles.DrawerTextClose} ><FontAwesomeIcon
                        icon={faArrowLeft}
                        color={'silver'}
                    /> </Text>


                </TouchableOpacity>

            </View>
            <View style={{ flex: 1, marginTop: 10 }}>
                <TouchableOpacity style={styles.DrawerList} onPress={() => navigation.navigate('DashBoard')} >
                    <Text style={styles.DrawerListText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.DrawerList} onPress={() => navigation.navigate('Manu')} >
                    <Text style={styles.DrawerListText}>Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.DrawerList} onPress={() => navigation.navigate('Notification')} >
                    <Text style={styles.DrawerListText}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.DrawerList} onPress={() => navigation.navigate('Settings')} >
                    <Text style={styles.DrawerListText}>Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.DrawerList} onPress={() => navigation.navigate('Profile')} >
                    <Text style={styles.DrawerListText}>Profile</Text>
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