import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../../config/styles'

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}> 
    <View style={styles.container}>
        <MaterialCommunityIcons 
          name="trash-can"
          size={32}
          color={defaultStyles.colors.light}
          />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor: defaultStyles.colors.danger,
    justifyContent:'center',
    width: 70,
  }
})

export default ListItemDeleteAction;