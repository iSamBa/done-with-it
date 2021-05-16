import React from 'react';
import {  StyleSheet, View  } from "react-native";
import WelcomeScreen from './app/screens/WelcomeScreen'
import AppButton from './app/components/AppButton'
import AppCard from './app/components/AppCard';

export default function App() {
  return (
    <AppCard title="Red jacket for sale" description="$100" image={require('./app/assets/jacket.jpg')}></AppCard>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'
  },
});
