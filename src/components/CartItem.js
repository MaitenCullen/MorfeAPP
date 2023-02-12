import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const CartItem = ({data, deleteFromCart}) => {
    let {id, name, price, quantity} = data;


  return (
    <View style={styles.item}>
        <Text style={styles.text}>
            {name}
        </Text>
        <Text style={styles.price}>
            {price}.00 x{quantity} = {price * quantity}.00
        </Text>
        <View style={styles.button}>
            <TouchableOpacity
                title='Eliminar carrito'
                onPress={()=> deleteFromCart(id,true)}
            >
            <Text>Eliminar Todos</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.button}>
            <TouchableOpacity
                title='Eliminar item'
                onPress={()=> deleteFromCart(id)}
            >
            <Text>Eliminar 1 Producto</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    item:{  
        padding:5,
        borderRadius:10,
        height:100,
        margin:10,
    },
    text:{
        color:'#F9AC66',
        fontWeight:'bold'
    },
    price:{
        color:'#FFB5CA',
    },
    button:{
        backgroundColor:'#969FDD',
        padding:5,
        borderRadius:10,
        margin:5,
        alignItems:'center'
    }
  })
export default CartItem