import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import IconItem from '../components/IconItem';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors'

const menuItems = [
  {
    title : "My Listings",
    icon : {
      name : 'format-list-bulleted',
      backgroundColor: 'primary'
    }
  },
  {
    title : "My Messages",
    icon : {
      name : 'email',
      backgroundColor: 'secondary'
    }
  },
]

function AccountScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.section}>
      <ListItem
        title="Mosh Hamedani"
        description="programmingwithmosh@gmail.com"
        image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.section}>
        <FlatList 
          data={menuItems}
          keyExtractor = {item => item.title}
          renderItem = {({item}) => <ListItem 
            title = {item.title}
            ImageComponent= {<IconItem
              iconName={item.icon.name}
              backgroundColor = {item.icon.backgroundColor}
              />}
          />}
          ItemSeparatorComponent = {ListItemSeparator}
        />
      </View>
      <View style={styles.section}>
        <ListItem 
        title="Log Out"
        ImageComponent={<IconItem iconName="logout" backgroundColor="warning" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.lightGrey
  },
  section:{
    backgroundColor: colors.light,
    marginVertical: 20
  },
})

export default AccountScreen;