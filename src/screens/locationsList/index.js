import React from 'react';
import {useSelector} from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

import PlaceItem from '../../components/placeItem';

const LocationsList = () => {
    const places = useSelector(state => state.places.places);

    const renderItem = ({item}) => (
        <PlaceItem
            name={item.name}
            address={item.address}
            latitude={item.latitude}
            longitude={item.longitude}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                My Location's List
            </Text>
            <FlatList
                style={styles.listContainer}
                data={places}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default LocationsList;
