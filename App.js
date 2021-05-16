import React from 'react';
import {  StyleSheet , View  } from "react-native";

import AppCard from './app/components/AppCard';

export default function App() {
  return (
    <View style={styles.container}>
      <AppCard title="Red jacket for sale !" description="$100" image={require('./app/assets/jacket.jpg')}></AppCard>
    </View>
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
