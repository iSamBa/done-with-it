import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'

export default function App() {
    return (
        <>
            <NavigationContainer theme={navigationTheme}>
                <AppNavigator />
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    )
}
