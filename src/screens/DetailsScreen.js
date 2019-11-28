import React, { Component } from 'react';
import {Text, View, Image, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Recipe Details',
    };

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', {});
        
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: item.image_url }} resizeMode="cover" style={styles.imageStyle} />

                <View style={{ margin: 20 }}>
                    <Text style={styles.fontStyle}>ID- {item.recipe_id}</Text>
                    <Text style={styles.fontStyle}>Name- {item.title}</Text>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: height / 2,
        width: width,
    },

    fontStyle: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
})