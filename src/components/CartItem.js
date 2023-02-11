import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const CartItem = ({data, deleteFromCart}) => {
    let {id, name, price, quantity} = data;


  return (
    <View>
  <View style={styles.container}>
        <Text>
            {name}
        </Text>
        <Text>
            {price}.00 x{quantity} = {price * quantity}.00
        </Text>
    </View>
    <View style={styles.item}>
        <TouchableOpacity
            title='Eliminar carrito'
            onPress={()=> deleteFromCart(id,true)}
        >
         <Text> Eliminar Todo</Text>
        </TouchableOpacity>
        <View style={styles.item}>
        <TouchableOpacity
            title='Eliminar item'
            onPress={()=> deleteFromCart(id)}
        >
         <Text> Eliminar Producto</Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  
 
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        borderTopColor:'#F9AC66',
        borderTopWidth:3,
        padding:5,
        width:400
    },
    item:{
        backgroundColor: 'white',
        height:10,
        margin:3,
        
    }
  })
export default CartItem