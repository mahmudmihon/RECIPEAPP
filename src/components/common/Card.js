import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Card extends Component{
    
    render() {
        const { children } = this.props;
        return <View style={ styles.wrapper }>{children}</View>;
    }
}

const styles = StyleSheet.create({
    wrapper: {
        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.3,

        shadowRadius: 3,

        elevation: 5,

        marginBottom: 20,

        marginHorizontal: 25,

        borderRadius: 8,

        borderWidth: 1,

        borderColor: '#ddd',

        backgroundColor: '#fff',

        overflow: 'hidden',

    },
})