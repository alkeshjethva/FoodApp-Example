// const HomeScreen = ({ navigation }) => {
//     return (
//         <View style={styles.dashBoardContainers} >
//             <HeaderComponent title="Foods" onLeftPress={() => navigation.openDrawer()} leftSource={require('./Images/icon.png')} />

//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <FlatList
//                     data={DATA}
//                     renderItem={({ item }) => (
//                         <View style={styles.imageViewContainer}>
//                             <TouchableOpacity onPress={() => alert(`name: ${item.title}, MRP: ${item.price} `)}>
//                                 <Image source={item.image} resizeMethod={"resize"} resizeMode={"cover"} style={styles.imageView} />
//                             </TouchableOpacity>
//                             <View style={styles.dashBoardTitleView}>
//                                 <Text style={styles.titleDashboard}>{item.title}</Text>
//                                 <Text style={styles.priceDashboard}>₹ {item.price}/-</Text>
//                             </View>
//                         </View>
//                     )}
//                     numColumns={2}
//                     keyExtractor={(item, index) => index.toString()}

//                 />
//             </ScrollView>
//         </View>
//     )
// }

// export default HomeScreen


// const styles = StyleSheet.create({

//     imageViewContainer: {
//         // marginVertical: 20,
//         // marginHorizontal: 20,
//         // height: 220,
//         // backgroundColor: '#303030',
//         // borderRadius: 5
//         flex: 1,
//         padding: 10
//     },

//     dashBoardContainers: {
//         flex: 1,
//         backgroundColor: '#212121'
//     },

//     imageView: {
//         backgroundColor: '#303030',
//         width: 165,
//         height: 165,
//         borderRadius: 5
//     },

//     dashBoardTitleView: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 10,

//     },

//     titleDashboard: {
//         color: 'silver',
//         fontFamily: 'Poppins-Medium',
//         fontSize: 20
//     },

//     priceDashboard: {
//         color: 'silver',
//         fontFamily: 'Poppins-Medium',
//         fontSize: 13
//     },



// })

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

const numOfColumn = 2

const WIDTH = Dimensions.get('window').width

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


const HomeScreen = ({ navigation }) => {

    const _renderItem = ({ item, index }) => {
        if (item.id === null) {
            return <View style={[styles.item, styles.itemInvisible]} />
        }
        return (
            <View style={styles.item}>
                <Image source={item.image} resizeMode={'cover'} style={styles.images} />
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.priceText}>₹ {item.price}/-</Text>
                </View>
            </View>
        )

    }

    const formatData = (DATA, numOfColumn) => {
        const totalRows = Math.floor(DATA.length / numOfColumn)
        let totalLastRow = DATA.length - (totalRows * numOfColumn)

        while (totalLastRow !== 0 && totalLastRow !== numOfColumn) {
            DATA.push({ id: null })
            totalLastRow++
        }
        return DATA
    }

    return (
        <>
            <HeaderComponent
                title="Foods"
                leftSource={require('./Images/icon.png')}
                onLeftPress={() => navigation.openDrawer()} />
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={formatData(DATA, numOfColumn)}
                    renderItem={_renderItem}
                    numColumns={numOfColumn}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#212121'
    },

    item: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        margin: 8,
        height: WIDTH / numOfColumn,
        backgroundColor: '#303030',
        borderRadius: 10
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    images: {
        height: 150,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    titleView: {
        flex: 1,
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    titleText: {
        color: 'silver',
        fontFamily: 'Poppins-Medium',
        fontSize: 18
    },
    priceText: {
        color: 'silver',
        fontFamily: 'Poppins-Medium',
    }
})