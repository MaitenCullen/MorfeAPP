import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';


export const ProductItem = ({data, addToCartItem}) => {
  let {id, name, price} = data;


  return (
    <View style={styles.container}>
      <Text>
        {name}
      </Text>
      <Text>
        {price}.00
      </Text>
        <View style={styles.button}>
            <TouchableOpacity
            title='Agregar Producto'
            onPress={() => addToCartItem(id)}>
              <Text> Agregar Producto</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      height:100,
      backgroundColor:'#FFE0C5',
      borderRadius:10,
      padding:5,
      width:170,
      justifyContent:'center',
      alignItems:'center',
      margin:7,
      justifyContent:'space-between'
  },
  button:{
      backgroundColor: '#C36B84',
      borderRadius:10,
      alignItems:'center',
      padding:5,
  }
})