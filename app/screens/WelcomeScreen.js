import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from '../components/AppButton';

import colors from './../config/colors'

const WelcomeScreen = () => {
  return (
       <ImageBackground 
        blurRadius = {10}
        source={require('./../assets/background.jpg')} 
        style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
            <Image 
              source={require('./../assets/logo-red.png')}
              style={styles.logo}
            />
            <Text style={styles.tagLine} >Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
           <AppButton title="Login" onPress={()=>console.log("login")}/>
           <AppButton title="Register" onPress={()=>console.log("Register")} color='secondary'/>
        </View>
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
  buttonsContainer: {
    width : '100%',
    padding: 20
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
  registerButton: {
    backgroundColor : colors.secondary, 
    height: 70, 
    width:"100%",
  },
  tagLine : {
    fontSize : 18,
    fontWeight : "bold",
    marginVertical : 10
  },
})

export default WelcomeScreen