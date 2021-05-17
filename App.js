import React from 'react';
import {  StyleSheet, StatusBar, View  } from "react-native";
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

import AccountScreen from './app/screens/AccountScreen';


export default function App() {
  return (
    <Screen>
      <StatusBar barStyle="dark-content" />
      <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop : 70,
    padding: 20,
    backgroundColor : '#eee',
  },
});
