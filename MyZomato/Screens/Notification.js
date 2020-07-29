import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Components/Header';

const Notification = ({ navigation }) => {
    const [data, setData] = useState(
        [
            {
                title: 'First title',
                subTitle: 'First subTitle',
                message: 'To render multiple columns, use the numColumns prop. Using this approach instead ',
                image: require('./IMG/images/first.png'),
                isSelected: false,
            },
            {
                title: 'Second title',
                subTitle: 'Second subTitle',
                message: 'To render multiple columns, use the numColumns prop. Using this approach instead ',
                image: require('./IMG/images/second.png'),
                isSelected: false,
            },
            {
                title: 'Third title',
                subTitle: 'Third subTitle',
                message: 'To render multiple columns, use the numColumns prop. Using this approach instead ',
                image: require('./IMG/images/third.png'),
                isSelected: false,
            },
            {
                title: 'Fourth title',
                subTitle: 'Fourth subTitle',
                message: 'To render multiple columns, use the numColumns prop. Using this approach instead ',
                image: require('./IMG/images/fourth.png'),
                isSelected: false,
            },
            {
                title: 'Fifth title',
                subTitle: 'Fifth subTitle',
                message: 'To render multiple columns, use the numColumns prop. Using this approach instead ',
                image: require('./IMG/images/fifth.png'),
                isSelected: false,
            }
        ]
    )




    const onPressHandler = (items, i) => {
        if (data[i].isSelected === false) {
            const newArray = [...data];
            newArray[i].isSelected = true;
            setData(newArray);
        } else {
            const newArray = [...data];
            newArray[i].isSelected = true;
            setData(newArray);
        }
    }

    return (
        <View>
            <Header name="Notification" onPressOpen={() => navigation.openDrawer()} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.rootContainer}>
                    {
                        data.map((data, index) => {
                            const { title, subTitle, message, image, isSelected } = data;
                            return (

                                <View key={index} style={styles.listView} >
                                    <TouchableOpacity onPress={() => onPressHandler(data, index)}>

                                        <View style={[styles.listTopView, { backgroundColor: data.isSelected === true ? '#303030' : '#404040' }]}>
                                            <View style={styles.imageView} >
                                                <Image source={image} style={styles.images} />
                                            </View>
                                            <View style={styles.titleView}>
                                                <Text style={styles.titles}>{title}</Text>
                                                <Text style={styles.subTitles}>{subTitle}</Text>
                                            </View>
                                            <View style={{
                                                top: -30
                                            }}>
                                                <Image source={require('./IMG/images/ribbonFill.png')}
                                                    style={{
                                                        height: 40, width: 50, resizeMode: 'contain', marginRight: -12,
                                                        tintColor: isSelected == false ? '#FFFFFF' : '#212121'
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={[styles.listBottomView, { backgroundColor: data.isSelected === true ? '#303030' : '#404040' }]}>
                                            <View style={styles.messagesView}>
                                                <Text style={styles.messages}>{message}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}



const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 70,
        backgroundColor: '#212121',

    },

    images: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    imageView: {
        flex: 2,
        borderTopStartRadius: 20,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleView: {
        flex: 8,
        borderTopEndRadius: 20,
        padding: 20,
    },

    titles: {
        textTransform: 'capitalize',
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium',
    },
    subTitles: {
        color: 'silver',
        fontFamily: 'Poppins-Medium',

    },

    listView: {
        flex: 1,
        width: '100%',
        marginVertical: 15,
    },


    listTopView: {
        flexDirection: 'row',
        backgroundColor: '#404040',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    messagesView: {
        paddingBottom: 25,
        paddingHorizontal: 20

    },

    messages: {
        color: 'gray',
        fontFamily: 'Poppins-Medium',

    },

    listBottomView: {
        backgroundColor: '#FFFFFF',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    }
})




export default Notification