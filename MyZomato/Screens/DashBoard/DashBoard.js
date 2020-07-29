import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../Styles';
import Header from '../../Components/Header';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

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
    return (
        <View style={styles.dashBoardContainers} >
            <Header name="Dashboard" onPressOpen={() => navigation.openDrawer()} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={styles.imageViewContainer}>
                            <TouchableOpacity onPress={() => alert(`name: ${item.title}, MRP: ${item.price} `)}>
                                <Image source={item.image} resizeMethod={"resize"} resizeMode={"cover"} style={styles.imageView} />
                            </TouchableOpacity>
                            <View style={styles.dashBoardTitleView}>
                                <Text style={styles.titleDashboard}>{item.title}</Text>
                                <Text style={styles.priceDashboard}>₹ {item.price}/-</Text>
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