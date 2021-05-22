import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items,onSelectItem, placeholder, selectedItem, width='100%' }) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.darkGrey} />}
          { 
          selectedItem ? 
          <AppText style={styles.text}> { selectedItem } </AppText> 
          : 
          <AppText style={styles.placeholder}> { placeholder } </AppText>
          }
          <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.darkGrey} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="X" onPress={()=>setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false)
                onSelectItem(item)
              }}
            />}
          />
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
  },
  icon: {
    marginRight : 10
  },
  placeholder:{
    color: defaultStyles.colors.medium,
    flex: 1
  },
  text: {
    flex: 1
  }
})

export default AppPicker;