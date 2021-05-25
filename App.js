import React, { useEffect, useState } from 'react';
import{ Image, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import Screen from './app/components/Screen'
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([])
  
  const handleAddImage = uri => setImageUris([...imageUris, uri])
  
  const handleRemoveImage = uri => setImageUris(imageUris.filter(imageUri => imageUri !== uri ))
 
  return (
    <Screen>
      <StatusBar
        barStyle='dark-content'
      />
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </Screen>
    );
}
