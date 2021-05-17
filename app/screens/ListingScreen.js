import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppCard from '../components/AppCard';
import colors from '../config/colors';

const items = [
  {
    id: 1,
    title : 'Red jacket for sale',
    price: '$100',
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title : 'Couch in great condition',
    price: '$1000',
    image: require('../assets/couch.jpg')
  }
]

function ListingScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <AppCard 
          title={item.title}
          description={item.price}
          image={item.image}
        />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
  },
  list: {
    padding : 20
  }
})

export default ListingScreen;