import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountNavigator from './AccountNavigator'
import FeedNavigator from './FeedNavigator'
import ListingEditScreen from '../screens/ListingEditScreen'

const Tab = createBottomTabNavigator ();

const AppNavigator = () => (
     <Tab.Navigator >
        <Tab.Screen name="Feed" component={FeedNavigator} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountNavigator} />
      </Tab.Navigator>
)
export default AppNavigator;