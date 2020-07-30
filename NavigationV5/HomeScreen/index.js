// import React from 'react';
// import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//     return (
//         <>
//             <StatusBar />
//             <View style={{ flex: 1 }}>
//                 <Text style={{ color: '#FFFFFF' }}> Home </Text>
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('Detaile')}
//                     style={{
//                         backgroundColor: 'lightblue',
//                         padding: 10,
//                         margin: 20
//                     }}>
//                     <Text>Detaile</Text>
//                 </TouchableOpacity>
//             </View>
//         </>

//     );
// }

// export default HomeScreen

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import Header from '../CustomComponents/Header';
import { useTheme } from '@react-navigation/native'


const DATA = [
    {
        id: 1,
        image: require('./Images/food1.png'),
        title: 'Title1',
        price: 300
    },
    {
        id: 2,
        image: require('./Images/food2.png'),
        title: 'Title2',
        price: 290
    },
    {
        id: 3,
        image: require('./Images/food3.png'),
        title: 'Title3',
        price: 700
    },
    {
        id: 4,
        image: require('./Images/food4.png'),
        title: 'Title4',
        price: 180
    },
    {
        id: 5,
        image: require('./Images/food5.png'),
        title: 'Title5',
        price: 200
    },
    {
        id: 6,
        image: require('./Images/food6.png'),
        title: 'Title6',
        price: 400
    }
]

const DashBoard = ({ navigation }) => {
    const { colors } = useTheme()

    return (
        <View style={styles.dashBoardContainers} >
            <Header
                title="Foods"
                leftSource={require('./Images/icon.png')}
                onPressLeft={() => navigation.openDrawer()} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={[styles.imageViewContainer, { backgroundColor: colors.background, borderColor: colors.text }]}>
                            <TouchableOpacity onPress={() => alert(`name: ${item.title}, MRP: ${item.price} `)}>
                                <Image source={item.image} resizeMethod={"resize"} resizeMode={"cover"} style={styles.imageView} />
                            </TouchableOpacity>
                            <View style={styles.dashBoardTitleView}>
                                <Text style={[styles.titleDashboard, { color: colors.text }]}>{item.title}</Text>
                                <Text style={[styles.priceDashboard, { color: colors.text }]}>₹ {item.price}/-</Text>
                            </View>
                        </View>
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}

                />
            </ScrollView>
        </View>
    )
}

export default DashBoard

const styles = StyleSheet.create({
    imageViewContainer: {
        marginVertical: 20,
        marginHorizontal: 20,
        height: 220,
        borderRadius: 5,
        borderWidth: 0.3,

    },

    dashBoardContainers: {
        flex: 1,
    },

    imageView: {
        width: 165,
        height: 165,
        borderRadius: 5
    },

    dashBoardTitleView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,

    },

    titleDashboard: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20
    },

    priceDashboard: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13
    },


})