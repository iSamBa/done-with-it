import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors'


function AccountItem({title, iconName, iconColor}) {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, {backgroundColor: colors[iconColor]}]}>
        <MaterialCommunityIcons name={iconName} size={25} color={colors.light} />
      </View>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center'
  },
  icon: {
    marginRight: 15,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight : '500'
  },
})

export default AccountItem;