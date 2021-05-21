import React, {useState} from 'react';
import {  StyleSheet, StatusBar, View  } from "react-native";

import AppPicker from './app/components/AppPicker'
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

const categories = [
  {label: "Fourniture", value:1},
  {label: "Clothings", value:2},
  {label: "Cameras", value:3},
]

export default function App() {

  const [category, setCategory] = useState(categories[0])

  return (
    <Screen>
      <StatusBar barStyle="dark-content" />
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        icon="apps"
        items={categories}
        placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email"></AppTextInput>
    </Screen>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop : 70,
    padding: 20,
    backgroundColor : '#eee',
  },
});
