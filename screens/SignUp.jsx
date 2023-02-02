import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GeneralStyles from '../styles/GeneralStyles';
import {StatusBar, Image} from 'react-native';
import SignUpStyles from "../styles/SignUpStyles";
import {TextInput} from 'react-native';


export const SignUp = ({navigation}) => {
  const users = [
    {
        id:'01',
        username:'Maiten',
        Password:'0718',
    },
    {
        id:'02',
        username:'Maxi',
        Password:'3018',
    }
  ]
  

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
                placeholder="Usuario"
                autoComplete="off"
                autoCorrect={true}
                autoCapitalize="none"
                inputmode='text'
                placeholderTextColor="#ED6B5B"/>
            </View>
            <View>
                <TextInput style={SignUpStyles.input}
                placeholder="Contraseña"
                autoComplete="off"
                autoCorrect={true}
                autoCapitalize="none"
                inputmode='text'
                placeholderTextColor="#ED6B5B"
                />
            </View>
            <View>
                <TouchableOpacity style={SignUpStyles.button}>
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