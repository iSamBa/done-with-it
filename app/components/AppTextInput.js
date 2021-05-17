import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.darkGrey}/>}
      <TextInput  {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 10,
    padding : 20,
    width: '100%'
  },
  icon: {
    marginRight : 10
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.darkGrey,
    width:'100%'
  }
})

export default AppTextInput;