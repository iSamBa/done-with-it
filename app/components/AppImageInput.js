import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, ImageBackground, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import defaultStyles from '../config/styles'


function AppImageInput({imageUri, onChangeImage}) {

  const handlePress = () => {
    if(!imageUri) selectImage()
    else {
      Alert.alert("Delete", "Are you sure you want to delete this image ?", [
        {text : "Yes", style: "cancel", onPress:()=>onChangeImage(null)},
        {text: 'No'}
      ])
    }
  }

  const selectImage = async() => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5
        })
        if (!result.cancelled)  onChangeImage(result.uri)
      } catch (error) {
        console.log('Error while getting the image', error) 
      }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        { imageUri && 
            <Image style={styles.image} source={{uri :imageUri}} />
        } 
        { !imageUri && 
              <MaterialCommunityIcons
                color={defaultStyles.colors.darkGrey}
                name="camera"
                size={30}
                />
        }
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  container: {
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