import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen';

function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
          { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.darkGrey} />}
          <AppText style={styles.text}>{ placeholder }</AppText>
          <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.darkGrey} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
        <Button title="Close" onPress={()=>setModalVisible(false)}></Button>
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 10,
    padding : 20,
    width: '100%'
  },
  icon: {
    marginRight : 10
  },
  text: {
    flex: 1
  }
})

export default AppPicker;