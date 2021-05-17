import React from 'react';
import { StyleSheet, View } from 'react-native';

import IconItem from '../components/IconItem';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors'


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
        <ListItem 
        title="My Listings"
        ImageComponent={<IconItem iconName="format-list-bulleted" backgroundColor="primary" />}
        />
        <ListItem 
        title="My messages"
        ImageComponent={<IconItem iconName="email" backgroundColor="secondary" />}
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
    marginVertical: 15
  },
})

export default AccountScreen;