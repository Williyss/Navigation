import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';

export default function Details() {
  return (
    <View style={estilo.container}>
        <Text>ESSA É A PÁGINA DE DETALHES</Text>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});