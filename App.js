import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/home/index"
import Details from './screens/details/index';

export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" component={Home}></stack.Screen>
        <stack.Screen name="details" component={Details}></stack.Screen>
      </stack.Navigator>

    </NavigationContainer>
  );
}
