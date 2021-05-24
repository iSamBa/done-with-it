import React, { useEffect, useState } from 'react';
import{ Image, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import Screen from './app/components/Screen'
import AppImageInput from './app/components/AppImageInput';

export default function App() {
  const [imageUri, setImageUri] = useState()
  
  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) alert('In order to fully use the application, we need access to the library')
  }
  useEffect(() => {requestPermission()}, [])

  return (
    <Screen>
      <StatusBar
        barStyle='dark-content'
      />
      <AppImageInput
        imageUri={imageUri}
        onChangeImage={ (uri) => setImageUri(uri) }
      />
      <Image source={{uri: imageUri}} />
    </Screen>
    );
}
