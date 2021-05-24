import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import defaultStyles from '../config/styles'


function AppImageInput({imageUri, onChangeImage}) {

  const selectImage = async() => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) {
        onChangeImage(result.uri)
      } 
    } catch (error) {
     console.log('Error while getting the image', error) 
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      { imageUri && 
          <Image style={styles.image} source={{uri :imageUri}} />
      } 
      { !imageUri && (
        <TouchableWithoutFeedback onPress={() => selectImage()}>
            <MaterialCommunityIcons
              color={defaultStyles.colors.darkGrey}
              name="camera"
              size={30}
              />
        </TouchableWithoutFeedback>
      ) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
   height: '100%',
   width:'100%',
  },
});

export default AppImageInput;