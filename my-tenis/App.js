import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton'

import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
     <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
     </>
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
