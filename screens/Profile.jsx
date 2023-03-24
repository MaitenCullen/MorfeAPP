import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ProfileStyles from '../styles/ProfileStyles'
import GeneralStyles from '../styles/GeneralStyles';
import ButtonStyles from '../styles/ButtonStyles';

export const Profile = ({navigation}) => {
  return (

   <View  style={GeneralStyles.container}>
    <TouchableOpacity style={ProfileStyles.buttonFav}
     onPress={() => navigation.navigate('ListFood')}>
        <Text>
        Mis favoritos
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={ProfileStyles.buttonMaps}
    onPress={() => navigation.navigate('Maps')}>
        <Text>
      Seleccionar en mapa
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={ProfileStyles.buttonPromos}
    onPress={() => navigation.navigate('Redux')}>
        <Text>
      Adquirir promos
        </Text>
    </TouchableOpacity>
   </View>

   )
}


