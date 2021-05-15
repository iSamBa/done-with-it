import React from 'react';
import {  StyleSheet } from "react-native";
import ViewImageScreen from './app/screens/ViewImageScreen.js';

import WelcomeScreen from './app/screens/WelcomeScreen.js'
export default function App() {
  return (
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
