import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Trips from './Components/Trips/Trips';
import CreateTrip from './Components/CreateTrip/CreateTrip';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TripPreview from './Components/TripPreview/TripPreview';
import DatePicker from './Components/DatePicker/DatePicker';
import Maps from './Components/Maps/Maps';

export const App = ({ navigation }) => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Trips'
        screenOptions={{ gestureEnabled: false }}
        headerMode={'float'}
        mode={'card'}
      >
        <Stack.Screen
          name='Trips'
          component={Trips}
          options={{ title: 'Trips' }}
        />
        <Stack.Screen
          name='Trip Preview'
          component={TripPreview}
        />
        <Stack.Screen
          name='Create Trip'
          component={CreateTrip}
        />
        <Stack.Screen
          name='Calendar'
          component={DatePicker}
        />
        <Stack.Screen
          name='Maps'
          component={Maps}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
