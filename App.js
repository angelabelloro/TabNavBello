import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/appNavigator';

export default function App() {

  const [loaded] = useFonts({
    Abel: require('./assets/fonts/Abel-Regular.ttf'),
    
  });

  if (!loaded) return <AppLoading />

  return (
    <AppNavigator />
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
