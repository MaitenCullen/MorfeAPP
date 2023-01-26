import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native';
import GeneralStyles from '../styles/GeneralStyles';
import LoginStyles from '../styles/LoginStyles';

export const LogIn = ({navigation}) => {
  return (
        <View style={GeneralStyles.container}>
          <TextInput 
          placeholder="Nombre"/>
          <TextInput 
          placeholder="Apellido"/>
          <Text>Selecciona tu fecha nacimiento</Text>
         {/* {!date? <DatePicker
          value={date}
          onChange={(value) => setDate(value)}
          format="yyyy-mm-dd"/> : <Text> {date.toDateString()}</Text>} */}
          <TextInput 
          placeholder="Provincia"/>
          <TextInput 
          placeholder="Ciudad"/>
           <Text style={LoginStyles.textLogin}>Hola! ya vamos a tener una pantalla acá, paciencia y cerveza</Text>
           <Button title='Go Back' onPress={()=> navigation.goBack()}/>
        </View>

    )
}
