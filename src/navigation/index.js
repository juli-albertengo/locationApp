import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './mainNavigator.js';

const Navigator = () => {
    return (
    <NavigationContainer>
        <MainStackNavigator />
    </NavigationContainer>
    );
};

export default Navigator;
