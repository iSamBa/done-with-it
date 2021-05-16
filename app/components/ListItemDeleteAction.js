import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}> 
    <View style={styles.container}>
        <MaterialCommunityIcons 
          name="trash-can"
          size={32}
          color={colors.light}
          />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor: colors.danger,
    justifyContent:'center',
    width: 70,
  }
})

export default ListItemDeleteAction;