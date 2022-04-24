import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const PlaceItem = ({name, address, latitude, longitude}) => {
  return (
      <View styles={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.address}>{latitude}</Text>
        <Text style={styles.address}>{longitude}</Text>
      </View>
  );
};

export default PlaceItem;

