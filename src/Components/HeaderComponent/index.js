// import React from 'react';
// import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native';

// const Header = (props) => {
//     return (
//         <View >
// <StatusBar backgroundColor={'#303030'} />
//             <View style={styles.headerView2}>
//                 <View style={styles.flexDirectionHeader}>

//                     <TouchableOpacity onPress={props.onPressOpen} style={styles.headerLeft}>
// <Image source={require('./Images/icon.png')} style={styles.drawerManu} />
//                     </TouchableOpacity>

//                     <View style={styles.headerCenter}>
//                         <Text style={styles.headerText3}> {props.title}</Text>
//                     </View>

//                     <TouchableOpacity style={styles.headerRight}>
//                         <Image source={require('./Images/icon.png')} style={styles.drawerManu} />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default Header


// const styles = StyleSheet.create({
//     headerView2: {
//         padding: 20,
//         backgroundColor: '#303030',
//     },

//     flexDirectionHeader: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },

//     headerText3: {
//         fontSize: 25,
//         color: 'lightblue',
//         fontFamily: 'Poppins-Medium',
//     },

// drawerManu: {
//     width: 30,
//     height: 40,
//     tintColor: 'silver',
//     marginRight: 10
// },


//     headerLeft: {
//         flex: 1,
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     headerCenter: {
//         flex: 8,
//     },
//     headerRight: {
//         flex: 1,
//         backgroundColor: 'red'
//     },
// })



import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HeaderComponent = (props, { navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#303030'} />
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.openDrawer()}>
                    <Image source={props.leftSource} style={styles.headerLeftImage} />
                </TouchableOpacity>
                <View style={[styles.headerCenter, { alignItems: props.alignItems }]} >
                    <Text style={styles.headerCenterText}>{props.title}</Text>
                </View>
                <TouchableOpacity style={styles.headerRight} onPress={props.onRightPress}>
                    <Image source={props.RightSource} style={styles.headerRightImage} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303030',

    },

    headerView: {
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },



    // Header left
    headerLeft: {
        flex: 1,
        padding: 10,
    },

    headerLeftImage: {
        tintColor: 'silver',
        height: 35,
        width: 30
    },


    // Header center
    headerCenter: {
        flex: 8,
        justifyContent: 'center',
    },

    headerCenterText: {
        color: 'lightblue',
        fontFamily: 'Poppins-Medium',
        fontSize: 25
    },


    // Header Right

    headerRight: {
        flex: 1,
        padding: 10
    },

    headerRightImage: {
        tintColor: 'silver',
        height: 30,
        width: 40
    }
})