import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles'

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.darkGrey}/>}
      <TextInput style={defaultStyles.text}  {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 10,
    padding : 20,
    width: '100%'
  },
  icon: {
    marginRight : 10
  }
})

export default AppTextInput;