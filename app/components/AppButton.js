import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from './../config/colors'

function AppButton({title, onPress, color = 'primary'}) {
  return (
    <TouchableOpacity style={[styles.loginButton, {backgroundColor: colors[color]}]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  loginButton : {
    backgroundColor : colors.primary,
    borderRadius: 50,
    justifyContent : 'center',
    alignItems: 'center',
    height: 60, 
    width:"100%",
    marginVertical : 10
  },
  buttonText : {
    color : colors.light,
    fontSize: 18,
    fontWeight:"bold",
    textTransform : 'uppercase',
  }
})

export default AppButton;