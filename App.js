import React from 'react';
import {  StyleSheet , View  } from "react-native";

import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    <ListingDetailsScreen></ListingDetailsScreen>
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
