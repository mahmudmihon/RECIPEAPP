import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './common/Card';
import Button from './common/Button';

export default class RecipeItem extends Component {

    gotoDetails = () => {
        const { navigation, item } = this.props;
        navigation.navigate('Details', {item});
    };

    render() {
        const { item } = this.props;

        return(
            <Card>
                <Image style={styles.imageStyle} resizeMode="cover" source={{ uri: item.image_url }}/>

                <View style={styles.detailsView}>
                    <View style={styles.details}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </View>

                <Button onPressButton={this.gotoDetails} title={'View Details'} />
            </Card>
        );
    }
}

const styles = StyleSheet.create({
        imageStyle: {
            flex: 1,
            height: 200,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
        },

        detailsView: {
            marginVertical: 20,
            marginHorizontal: 10,
        },

        title: {
            fontSize: 18,
            fontWeight: 'bold',
            flex: 1,
        },

        details: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        },
});