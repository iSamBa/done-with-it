import React from 'react';
import{  StatusBar } from 'react-native';

import Screen from './app/components/Screen'
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  
  return (
    <Screen>
      <StatusBar
        barStyle='dark-content'
      />
     <ListingEditScreen />
    </Screen>
    );
}
