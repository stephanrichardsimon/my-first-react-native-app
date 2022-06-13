import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import Item from "../Item"
import ItemSection from "../ItemSection";
import Button from "../Button";

const CarDetails = ({brand}) => {
    const styles = StyleSheet.create({
        headerContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        headerText: {
            fontSize: 18,
            fontWeight: '500',
            textTransform: 'uppercase'
        },
        imageStyle: {
            height: 300,
            flex: 1,
            width: 0
        }
    })

    return (
        <Item>
            <ItemSection>
                <View styles={styles.headerContainer}>
                    <Text style={styles.headerText}>{brand.brand}</Text>
                    <Text style={styles.headerText}>{brand.model[0].name}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image style={styles.imageStyle} source={{ uri: brand.model[0].image }} />
            </ItemSection>
            <ItemSection>
                <Button onPress={e => Linking.openURL(brand.model[0].url)} />
            </ItemSection>
        </Item>
    )
}

export default CarDetails;