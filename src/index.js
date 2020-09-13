import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <Routes />
    </>
  );
}
