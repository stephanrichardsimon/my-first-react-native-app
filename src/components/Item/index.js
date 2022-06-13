import React from "react";
import { StyleSheet, View } from "react-native";

const Item = props => {

    const styles = StyleSheet.create({
        viewStyle: {
            borderWidth: 1,
            borderColor: 'gainsboro',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.8,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10
        }
    })

    return (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    )
}

export default Item;