import React from 'react'
import { Formik } from 'formik'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import AppErrorMessage from '../components/AppErrorMessage'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

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
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => 
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
                        <AppErrorMessage error={errors.email} />
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon="lock"
                            onChangeText= {handleChange('password')}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppErrorMessage error={errors.password} />
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
