import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Alert, ScrollView } from 'react-native';
import { styles } from '../Styles';
import { connect } from 'react-redux';

const Footer = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const payVia = () => {
        if (props.totalPrice > 1) {
            setModalVisible(true)

        } else {
            Alert.alert(`Warning`, `Please buy Foods`)

        }
    }

    const gpay = () => {
        Alert.alert('Succesful', `You debited ₹ ${props.totalPrice}/- via Google pay`)

    }

    const phonepay = () => {
        Alert.alert('Succesful', `You debited ₹ ${props.totalPrice}/- via PhonePe `)

    }

    const paytm = () => {
        Alert.alert('Succesful', `You debited ₹ ${props.totalPrice}/- via Paytm`)

    }

    return (
        <View style={styles.footerView}>
            <Text style={styles.footerText}> Payable: ₹ {props.totalPrice}/- </Text>
            <Modal visible={modalVisible} transparent={true} animationType={'slide'}>
                <View style={styles.footerViewModal}>
                    <View style={styles.imgView}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Image source={require('../Images/icon.png')} style={styles.img} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.payBtnModal} showsVerticalScrollIndicator={false}>
                        <TouchableOpacity style={styles.BtnModal} drawerClose={props.drawerClose} onPress={gpay} >
                            <Text style={styles.footerTextModal}>Google Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnModal} drawerClose={props.drawerClose} onPress={phonepay}>
                            <Text style={styles.footerTextModal}>PhonePe</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnModal} drawerClose={props.drawerClose} onPress={paytm}>
                            <Text style={styles.footerTextModal}>Paytm</Text>
                        </TouchableOpacity>
                    </ScrollView>


                </View>

            </Modal>

            <TouchableOpacity style={styles.payBtn} onPress={payVia} >
                <Text style={styles.footerText}>Pay via </Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        totalPrice: state.chocolate.price + state.icecream.price
    }
}

export default connect(mapStateToProps)(Footer)