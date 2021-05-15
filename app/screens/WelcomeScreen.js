import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";

import colors from './../config/colors'

const WelcomeScreen = () => {
  return (
       <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/logo-red.png')}
              style={styles.logo}
            />
            <Text style={styles.text} >Sell What You Don't Need</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
       </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage : {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
    justifyContent: "flex-end",
  },
  loginButton : {
    backgroundColor : colors.primary, 
    height: 70, 
    width:"100%",
  },

  registerButton: {
    backgroundColor : colors.secondary, 
    height: 70, 
    width:"100%",
  },
  
  logo : {
    height:100,
    width:100
  },
  logoContainer : {
    alignItems: "center",
    position: 'absolute',
    top : 50,
  },
  text : {
    fontSize : 16,
  },
})

export default WelcomeScreen