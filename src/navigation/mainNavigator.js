import React from 'react';
import {  Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import COLORS from '../constants/colors';

import Home from '../screens/home/index';
import LocationsList from '../screens/locationsList/index';
import AddLocation from '../screens/addLocation';

const mainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <mainStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
                },
                headerTintColor: Platform.OS === 'android' ? COLORS.white : COLORS.primaryColor,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <mainStack.Screen
                name="Home"
                component={Home}
            />
            <mainStack.Screen
                name="Add Location"
                component={AddLocation}
            />
            <mainStack.Screen
                name="Location's List"
                component={LocationsList}
            />
        </mainStack.Navigator>
    );
};

export default MainStackNavigator;
