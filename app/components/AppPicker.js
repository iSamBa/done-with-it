import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles'
import AppText from './AppText'

function AppPicker({icon, placeholder, ...otherProps}) {
  return (
    <View style={styles.container}>
      { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.darkGrey} />}
      <AppText style={styles.text}>{ placeholder }</AppText>
      <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.darkGrey} />
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
  },
  text: {
    flex: 1
  }
})

export default AppPicker;