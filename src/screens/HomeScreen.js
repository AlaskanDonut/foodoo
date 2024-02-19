import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>HomeScreen.js</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
    </View>
  );
}

const styles = StyleSheet.create({
  
});