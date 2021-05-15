import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

function AppText({children}) {
  return (
    <Text style={styles.appText}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  appText : {
    fontSize: 18,
    fontFamily : Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  }
})

export default AppText;