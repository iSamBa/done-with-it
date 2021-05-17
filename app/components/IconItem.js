import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function IconItem({
  iconName,
  iconColor = "light",
  backgroundColor = "dark",
  size = 50,
  style
 }) {
  return (
    <View style={[styles.icon, style, {
      backgroundColor: colors[backgroundColor],
      height: size,
      width: size,
      borderRadius: size/2
      }]}>
      <MaterialCommunityIcons name={iconName} size={size*0.5} color={colors[iconColor]} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default IconItem;