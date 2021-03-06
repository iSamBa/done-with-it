import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles'

function AppTextInput({icon, width='100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.darkGrey}/>}
      <TextInput 
      placeholderTextColor={defaultStyles.colors.medium}
      style={defaultStyles.text}  
      {...otherProps}/>
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
  },
  icon: {
    marginRight : 10
  },
  text: {
    flex: 1,
    flexDirection: 'row',
  }
})

export default AppTextInput;