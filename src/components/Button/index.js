import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = props => {
    const styles = StyleSheet.create({
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: 'grey',
            borderWidth: 1,
            borderColor: 'gainsboro',
            marginLeft: 7,
            marginRight: 7
        },
        textStyle: {
            fontSize: 14,
            fontWeight: '500',
            paddingTop: 6,
            paddingBottom: 6,
            color: '#fff',
        }
    })
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={props.onPress}
        >
            <Text style={styles.textStyle}>Click me</Text>
        </TouchableOpacity>
    )
}

export default Button;