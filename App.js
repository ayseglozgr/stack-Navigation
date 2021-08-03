import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';



import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Notifications from './Screens/Notifications';
import Settings from './Screens/Settings';




export default function MyStack() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
 <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>

    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

