import React from 'react';
import {  StyleSheet  } from "react-native";

import AccountScreen from './app/screens/AccountScreen';


export default function App() {
  return (
    <AccountScreen />
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
