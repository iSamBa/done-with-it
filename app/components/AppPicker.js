import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

function AppPicker(props) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="C" value="c" />
      <Picker.Item label="C++" value="cpp" />
      <Picker.Item label="C#" value="csharp" />
      </Picker>
    </View>
  );
}

export default AppPicker;