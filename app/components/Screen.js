import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from 'expo-status-bar';


function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[style, styles.view]}>
        {children}
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    color: "#000000",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1
  }
});

export default Screen;
