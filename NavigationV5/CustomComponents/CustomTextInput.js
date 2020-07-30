import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { useTheme } from '@react-navigation/native'

const CustomTextInput = (props) => {
    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={colors.text}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                maxLength={props.maxLength}
                style={[styles.inputText, { borderColor: colors.text }]}
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
        fontSize: 17,
        borderWidth: 0.5,
        padding: 15,
        borderRadius: 8,
    }
})

export default CustomTextInput