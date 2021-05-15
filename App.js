import React from 'react';
import {  StyleSheet, View  } from "react-native";
import WelcomeScreen from './app/screens/WelcomeScreen'
import AppButton from './app/components/AppButton'

export default function App() {
  return (
    <WelcomeScreen></WelcomeScreen>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'
  },
});
