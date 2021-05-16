import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from './../config/colors'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color="white"></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={30} color="white"></MaterialCommunityIcons>
      </View>
      <Image
        resizeMode={'contain'} 
        style={styles.image}
        source={
          require("./../assets/chair.jpg")
        }>
        
      </Image>
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon : {
    position : 'absolute',
    top : 50,
    left : 25
  },
  deleteIcon : {
    position : 'absolute',
    top : 50,
    right : 25
  },
  container : {
    backgroundColor : colors.dark,
    flex : 1,
  }, 
  image : {
    width : "100%",
    height : "100%",
  }
})
export default ViewImageScreen;
