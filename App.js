import React from 'react';
import {  StyleSheet  } from "react-native";

import LoginScreen from './app/screens/LoginScreen';



export default function App() {
  return (
      <LoginScreen></LoginScreen> 
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
