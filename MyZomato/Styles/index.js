import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    // ListScreen
    container: {
        flex: 1,
        // backgroundColor: '#222831'
        backgroundColor: '#212121',

    },



    // Header
    headerView2: {
        padding: 20,
        backgroundColor: '#303030',
    },

    flexDirectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    headerText3: {
        // fontWeight: 'bold',
        fontSize: 25,
        color: '#f6c90e',
        fontFamily: 'Poppins-Medium',
    },

    drawerManu: {
        width: 30,
        height: 30,
        tintColor: 'silver'
    },


    // ListItems

    listContainer: {
        backgroundColor: '#303030',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        elevation: 5,
    },

    listInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    listTitles: {
        flex: 6,
        padding: 20,

    },


    listBtns: {
        flex: 4,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'center'
    },

    listItemName: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium',

    },

    listItemPrice: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',

    },

    bhav: {
        color: '#E4E4E4',
        fontSize: 15
    },

    listBtnContainer: {
        flex: 4,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#212121',
        marginVertical: 30,
        marginHorizontal: 10,
        borderRadius: 10
    },

    AddBtn: {
        flex: 1.50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#212121',
        marginVertical: 30,
        marginHorizontal: 10,
        borderRadius: 10
    },





    // Footer 
    footerView: {
        backgroundColor: '#303030',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },


    footerText: {
        color: '#f4f4f2',
        fontFamily: 'Poppins-Medium',

    },


    footerViewModal: {
        backgroundColor: '#212121',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

    },


    footerTextModal: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium',

    },


    // Modal

    imgView: {
        padding: 10,
        backgroundColor: '#303030',
        padding: 2,
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0
    },

    img: {
        width: 30,
        height: 20,
        tintColor: '#212121'
    },

    payBtn: {
        backgroundColor: '#21bf73',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },

    payBtnModal: {
        height: 250,
        marginTop: 25,
        // paddingTop: 10,
        // marginBottom: 20
    },

    BtnModal: {
        backgroundColor: '#21bf73',
        margin: 10,
        padding: 15,
        borderRadius: 5,
    },




    // Drawer

    drawerContainer: {
        flex: 1,
        backgroundColor: '#212121',
        padding: 20
    },

    DrawerText: {
        fontSize: 20,
        color: '#FFFFFF',

    },

    DrawerTextClose: {
        fontSize: 30,
        color: 'red'

    },

    DrawerList: {
        backgroundColor: '#303030',
        padding: 15,
        borderRadius: 5,
        marginVertical: 8
    },

    DrawerListText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium',
    },

    DrawerFooter: {
        color: 'silver',
        fontFamily: 'Poppins-Medium',
    }


})



