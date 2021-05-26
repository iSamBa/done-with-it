import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import AppText from './AppText';

import IconItem from './IconItem'

function PickerItemComponent({item, onPress}) {
 return (
    <View style={styles.container}>
     <TouchableOpacity onPress={onPress}>
        <IconItem backgroundColor={item.backgroundColor} iconName={item.icon} size={80}/>
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: "33%"
  },
  label:{
    marginTop: 10,
    textAlign: 'center',
  }
});

export default PickerItemComponent;