import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title, description, image, onPress}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.lightGrey}
    >
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </View>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  description: {
    color: colors.medium
  },
  image: {
    borderRadius: 35,
    marginRight: 10,
    height: 70,
    width: 70,
  },
  title: {
    fontWeight: '500'
  },

})

export default ListItem;