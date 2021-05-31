import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from '../screens/AccountScreen'
import FeedNavigator from './ListingNavigator'
import ListingEditScreen from '../screens/ListingEditScreen'

const Tab = createBottomTabNavigator ();

const AppNavigator = () => (
     <Tab.Navigator >
        <Tab.Screen name="Listing" component={FeedNavigator} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
)
export default AppNavigator;