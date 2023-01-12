import React from 'react'
import GeneralStyles from '../styles/GeneralStyles'
import ButtonStyles from '../styles/ButtonStyles'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'


 export const Home = () => {
  return (
    <View style={GeneralStyles.container}>
      <View style={GeneralStyles.containerImage} >
      <Image style={GeneralStyles.image}
        source={require('../assets/logo.png')}
        />
      <Text style={GeneralStyles.textHome}>Morfamos?</Text>
      </View>
      <View style={GeneralStyles.buttonContainer}>
          <TouchableOpacity 
              style={ButtonStyles.buttonLogIn}
              title='Unirse' >
              <Text style={ButtonStyles.textoLogin}> Unirse</Text>
          </TouchableOpacity>
          <TouchableOpacity  
              style={ButtonStyles.buttonGoogle}
              title='Unirse'>
              <Text> Registrarse con Google </Text>
          </TouchableOpacity>
          <Text style={GeneralStyles.textSigUp}>¿Ya hemos comido juntos? Iniciar sesión</Text>
      </View>
    </View>
  )
}
