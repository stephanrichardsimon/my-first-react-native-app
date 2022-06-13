import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarList from './src/components/CarList';
import Header from './src/components/Header';

export default function App() {
  const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#fff',
      height: '100%',
      flex: 1
    },
    
  });

  return (
    <View style={styles.viewStyle}>
      <Header title='Cars' />
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}

