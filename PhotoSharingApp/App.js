import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebase } from './firebase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Firebase Configured Successfully!</Text>
    </View>
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
