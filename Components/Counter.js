import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { increamentCounter, decreamentCounter } from '../Redux/CounterIncreament/Actions/CounterIncreamentAction'

class Counter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} barStyle={"dark-content"}></StatusBar>
                <View style={styles.flexDirections}>
                    <Text style={styles.containerText}>{this.props.numOfCounter}</Text>
                </View>

                <View style={styles.flexDirections}>

                    <TouchableOpacity style={styles.btn} onPress={this.props.increamentCounter}>
                        <Text style={styles.btnText}>Increament</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={this.props.decreamentCounter}>
                        <Text style={styles.btnText}>Decreament</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        numOfCounter: state.numOfCounter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increamentCounter: () => dispatch(increamentCounter()),
        decreamentCounter: () => dispatch(decreamentCounter())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        margin: 50,
        fontSize: 50,
        color: 'gray'
    },
    flexDirections: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#E4E4E4',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        padding: 20,
        borderRadius: 10
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)