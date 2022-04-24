import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Home = ({navigation}) => {

    const navigateToAddLocation = () => {
        navigation.navigate('Add Location', {});
    };

    const navigateToAddedLocations = () => {
        navigation.navigate('Location\'s List', {});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to the Location's App
            </Text>
            <TouchableOpacity onPress={navigateToAddLocation} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>ADD NEW LOCATION</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToAddedLocations} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SEE MY LOCATIONS</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
