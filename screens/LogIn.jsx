import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

export const LogIn = ({navigation}) => {
  return (
        <View>
           <Text>Hola</Text>
           <Button title='Go Back' onPress={()=> navigation.goBack()}/>
        </View>

    )
}
