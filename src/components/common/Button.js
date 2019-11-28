import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
    render() {
        const { onPressButton, title } = this.props;

        return(
            <TouchableOpacity onPress={onPressButton} style={styles.wrapper}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        backgroundColor: '#009737',
    },

    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})