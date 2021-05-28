import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from '../components/AppButton';
import defaultStyles from './../config/styles'

const WelcomeScreen = ({ navigation }) => {
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
           <AppButton title="Login" onPress={()=>navigation.navigate('Login')}/>
           <AppButton title="Register" onPress={()=>navigation.navigate('Register')} color='secondary'/>
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
    backgroundColor : defaultStyles.colors.secondary, 
    height: 70, 
    width:"100%",
  },
  tagLine : {
    fontSize : 20,
    fontWeight : "bold",
    marginVertical : 10
  },
})

export default WelcomeScreen