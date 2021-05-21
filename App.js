import React from 'react';
import {  StyleSheet, StatusBar, View  } from "react-native";
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

import AccountScreen from './app/screens/AccountScreen';
import AppPicker from './app/components/AppPicker'


export default function App() {
  return (
    <Screen>
      <StatusBar barStyle="dark-content" />
      <AppPicker icon="apps" placeholder="Category"/>
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
