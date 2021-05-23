import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker'

import Screen from './app/components/Screen'
import { Button, Image } from 'react-native';

export default function App() {
  const [imageUri, setimageUri] = useState()
  
  const selectImage = async() => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) setimageUri(result.uri)
    } catch (error) {
     console.log('Error while getting the image', error) 
    }
  }

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) alert('In order to fully use the application, we need access to the library')
  }
  useEffect(() => {requestPermission()}, [])

  return (
    <Screen>
      <Button title="Select image" onPress={selectImage}></Button>
      <Image source={{uri: imageUri}} style={{width: 200, height: 200}}></Image>
    </Screen>
    );
}
