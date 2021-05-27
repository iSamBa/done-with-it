import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './app/components/Screen'

const Tweets = () => (
  <View>
    <Text>Tweets</Text>
  </View>
)

const TweetDetails = () => (
  <View>
    <Text>TweetDetails</Text>
  </View>
)

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tweetDetails" component={TweetDetails} />
        <Stack.Screen name="tweets" component={Tweets} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
