import React from 'react';
import { StyleSheet, View } from 'react-native';
import AccountItem from '../components/AccountItem';
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
        <AccountItem 
        title="My Listings"
        iconName="format-list-bulleted"
        iconColor="primary"
        />
        <AccountItem 
        title="My Messages"
        iconName="email"
        iconColor="secondary"
        />
      </View>
      <View style={styles.section}>
        <AccountItem 
        title="Log Out"
        iconName="logout"
        iconColor="warning"
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