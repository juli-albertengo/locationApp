import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {useDispatch} from 'react-redux';
import {placeActions} from '../../store/actions';

import { styles } from './styles';

import LocationSelector from '../../components/locationSelector';

const AddLocation = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [location, setLocation] = useState(null);

    const handleNameChange = text => setName(text);

    const handleSavePlace = () => {
        const { latitude, longitude } = location;
        const address = 'Example Adress';
        dispatch(placeActions.addPlace(name, address, latitude, longitude));
        setName('');
    };

    const handleOnLocation = (locationReceived) => {
        setLocation(locationReceived);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Add New Location
            </Text>
            <LocationSelector
                onLocation={handleOnLocation}
            />
            <Text style={styles.subTitle}>Insert Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleNameChange}
                value={name}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSavePlace}>
                    <Text style={styles.buttonText}>SAVE NEW LOCATION</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddLocation;
