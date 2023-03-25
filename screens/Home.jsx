import React from 'react'
import GeneralStyles from '../styles/GeneralStyles'
import ButtonStyles from '../styles/ButtonStyles'
import { Image, Linking, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ShoppingCart } from '../src/components/ShoppingCart'


 export const Home = ({navigation}) => {
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
              title='Unirse'
              onPress={()=> navigation.navigate("Login")} >
              <Text style={ButtonStyles.textoLogin}> Unirse</Text>
          </TouchableOpacity>

          <Text style={GeneralStyles.textSigUp}>¿Ya hemos comido juntos? <Text style={GeneralStyles.textNavigate} onPress={()=> navigation.navigate('Signup')}> Iniciar sesión</Text></Text>
      </View>
    </View>
  )
}

