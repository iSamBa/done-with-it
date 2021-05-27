import React from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './app/components/Screen'

const Tweets = ({navigation}) => (
  <Screen>
    <View>
      <Text>Tweets</Text>
      <Link />
    </View>
  </Screen>
)

const Link = () => {
  const navigation = useNavigation()
  return <Button title="Go to details" onPress={()=> navigation.navigate("tweetDetails")}/>
}

const TweetDetails = () => (
  <Screen>
    <View>
      <Text>TweetDetails</Text>
    </View>
  </Screen>
)

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tweets" component={Tweets} />
        <Stack.Screen name="tweetDetails" component={TweetDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
