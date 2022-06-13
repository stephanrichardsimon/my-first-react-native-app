import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {    
    const styles = StyleSheet.create({
        viewStyle: {
            width: '100%',
            height: 80,
            backgroundColor: '#056E85',
            justifyContent: 'center',
            alignItems: 'center'
        },
        textStyle: {
            fontSize: 25,
            color: '#fff',
            fontFamily: 'ui-monospace',
        }
    })
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    )
}

export default Header;