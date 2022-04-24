import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import { styles } from './styles';

const LocationSelector = ({onLocation}) => {
    const [pickedLocation, setPickedLocation] = useState(null);

    const getLocation = () => {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            const location = {
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            };
            setPickedLocation(location);
            onLocation(location);
          },
          error => {
            console.warn('error', error);
            Alert.alert('Can not get location', 'Please try again later', [
              {text: 'Okay'},
            ]);
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 3600000,
          },
        );
    };

    return (
        <View>
            <Text style={styles.subTitle}>Pick Location</Text>
            <View style={styles.preview}>
                {
                    pickedLocation ? (
                        <Text>
                            {pickedLocation.latitude}, {pickedLocation.longitued}
                        </Text>
                    ) : (
                        <Text>No location selected</Text>
                    )
                }
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={getLocation}>
                    <Text style={styles.buttonText}>PICK LOCATION</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LocationSelector;
