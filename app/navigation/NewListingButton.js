import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from './../config/styles'

function NewListingButton({onPress }) {
    return (
      <TouchableOpacity onPress={onPress}>
         <View style={styles.container} >
             <MaterialCommunityIcons name="plus-circle" size={40} color={defaultStyles.colors.light} />
        </View>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        borderColor: defaultStyles.colors.light,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 80,
        justifyContent: 'center',
        width: 80,
  }
})

export default NewListingButton;