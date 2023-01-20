import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import GeneralStyles from '../styles/GeneralStyles';
import Login from './../styles/Login';

export const LogIn = ({navigation}) => {
  return (
        <View style={GeneralStyles.container}>
           <Text style={Login.textLogin}>Hola! ya vamos a tener una pantalla acá, paciencia y cerveza</Text>
           <Button title='Go Back' onPress={()=> navigation.goBack()}/>
        </View>

    )
}
