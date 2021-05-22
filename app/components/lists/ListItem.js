import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText';
import defaultStyles from '../../config/styles';

function ListItem({title, description, image, ImageComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={defaultStyles.colors.lightGrey}>
      <View style={styles.container}>
        { ImageComponent }
        { image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          { description && <AppText style={styles.description}>{description}</AppText>}
        </View>
      </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  description: {
    color: defaultStyles.colors.medium
  },
  detailsContainer :{
    justifyContent: 'center',
    marginLeft: 10
  },  
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  title: {
    fontWeight: '500'
  },
})

export default ListItem;