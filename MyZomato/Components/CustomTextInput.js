import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                maxLength={props.maxLength}
                style={styles.inputText}
                placeholderTextColor={'silver'}

                editable={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 30,
        marginVertical: 10
    },

    inputText: {
        // color: '#',
        fontSize: 17,
        borderWidth: 0.5,
        borderColor: '#E4E4E4',
        padding: 15,
        borderRadius: 8,
    }
})

export default CustomTextInput