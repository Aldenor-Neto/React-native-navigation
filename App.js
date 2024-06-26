import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/screens/Home';
import Sobre from './src/screens/Sobre';

const Pilha = createStackNavigator();
const Guia = createBottomTabNavigator();
const Gavetas = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Gavetas.Navigator>
        <Gavetas.Screen name="Home" component={Home} />
        <Gavetas.Screen name="Sobre" component={Sobre} />
      </Gavetas.Navigator>
    </NavigationContainer>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
