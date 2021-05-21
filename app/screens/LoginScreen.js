import React from 'react'
import { Formik } from 'formik'
import { StyleSheet, Image } from 'react-native'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => 
                    <>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText= {handleChange('email')}
                            placeholder="Email"
                            textContentType="emailAddress"
                            />
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon="lock"
                            onChangeText= {handleChange('password')}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppButton title="login" onPress={handleSubmit}/>
                    </>
                }
            </Formik>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },  
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },
})

export default LoginScreen
