import React from 'react';
import {  Image, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import defaultStyles from '../config/styles';

function ListingDetailsScreen() {
  return (
  <View>
    <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
    <View style={styles.detailsContainer}>
      <AppText style={styles.title}>Red jacket for sale</AppText>
      <AppText style={styles.price}>$100</AppText>
      <View style={styles.userContainer}>
      <ListItem 
        image={require("../assets/mosh.jpg")}
        title="Mosh"
        description="5 Listings" 
        />
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer:{
    padding : 20
  },
  image: {
    width : '100%',
    height : 300
  },
  price: {
    color : defaultStyles.colors.secondary,
    fontSize : 20,
    fontWeight : 'bold',
    marginVertical : 10,
  },
  title: {
    fontSize : 24,
    fontWeight: '500'
  },
  userContainer: {
    marginVertical : 40
  },
})

export default ListingDetailsScreen;