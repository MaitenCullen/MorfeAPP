import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GeneralStyles from '../styles/GeneralStyles';
import {StatusBar, Image} from 'react-native';
import SignUpStyles from "../styles/SignUpStyles";
import {TextInput} from 'react-native';
import { signInWithEmailAndPassword, getAuth} from 'firebase/auth';





export const SignUp = ({navigation}) => {
    const auth = getAuth();

    const handleSigIn = () => {    
       signInWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
            const user  = userCredential.user
            navigation.navigate('Perfil')
        })
        .catch(error => {
            console.log(error, errorCode, errorMessage)
            const errorCode = error.code;
            const errorMessage = error.message;

        })
    }

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
  

    return (
        <SafeAreaView style={GeneralStyles.container}>
        <StatusBar style='auto'/>
            <View style={SignUpStyles.containerSignUp}>
            <View>
            <Image style={SignUpStyles.imageStyle}
              source={require('../assets/beer.png')}
                />
            </View>
            <View>
                <TextInput style={SignUpStyles.input} 
                placeholder="email"
                autoComplete="off"
                autoCorrect={true}
                autoCapitalize="none"
                inputmode='text'
                placeholderTextColor="#ED6B5B"
                onChangeText={(text)=> setEmail(text)}/>
            </View>
            <View>
                <TextInput style={SignUpStyles.input}
                placeholder="password"
                autoComplete="off"
                autoCorrect={true}
                autoCapitalize="none"
                inputmode='text'
                placeholderTextColor="#ED6B5B"
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                />
            </View>
            <View>
                <TouchableOpacity style={SignUpStyles.button}
                onPress={handleSigIn}>
                    <Text style={SignUpStyles.textButton}>
                        Ingresar
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
            <Image style={SignUpStyles.imageStyle}
              source={require('../assets/logo.png')}
                />
            </View>
            </View>
        </SafeAreaView>
    )
}