import React from 'react';
import {  StyleSheet  } from "react-native";

import ListingScreen from './app/screens/ListingScreen';


export default function App() {
  return (
    <ListingScreen />
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
