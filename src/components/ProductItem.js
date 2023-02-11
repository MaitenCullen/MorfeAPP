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
      <View style={styles.item}>
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
      height:70,
      backgroundColor:'yellow',
      borderTopColor:'#F9AC66',
      borderTopWidth:3,
      padding:5,
      width:350,
      flex:1
  },
  item:{
      backgroundColor: 'blue',
  }
})