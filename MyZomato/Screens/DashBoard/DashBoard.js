import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../Styles';
import Header from '../../Components/Header';
import { ScrollView } from 'react-native-gesture-handler';

const DashBoard = ({ navigation }) => {
    return (
        <View style={styles.dashBoardContainer} >
            <Header name="Dashboard" onPressOpen={() => navigation.openDrawer()} />

            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 20 }}>
                <View style={styles.gridContaiiner}>

                    <View style={styles.container}>

                    </View>
                    <View style={styles.container}>

                    </View>
                </View>
                <View style={styles.gridContaiiner}>

                    <View style={styles.container}>

                    </View>
                    <View style={styles.container}>

                    </View>
                </View>
                <View style={styles.gridContaiiner}>

                    <View style={styles.container}>

                    </View>
                    <View style={styles.container}>

                    </View>
                </View>
                <View style={styles.gridContaiiner}>

                    <View style={styles.container}>

                    </View>
                    <View style={styles.container}>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DashBoard