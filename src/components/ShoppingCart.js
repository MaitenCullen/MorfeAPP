import React, { useReducer } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native';
import {StyleSheet} from 'react-native';
import { ShoppingInitialState, shoppingReducer } from '../../store/actions/reducer/ShoppingReducer';
import CartItem from './CartItem';
import { ProductItem } from './ProductItem';
import {TouchableOpacity} from 'react-native';
import { Types } from './../../store/actions/ShoppingAction';

export const ShoppingCart = () => {
    const [state, dispatch]= useReducer(
        shoppingReducer, 
        ShoppingInitialState);


const {products, cart} = state;

const addToCartItem = (id) => {
 console.log(id, 'el producto');
 dispatch({type:Types.AddToCart, payload:id})
}

const deleteFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
        dispatch({type:Types.RemoveAllFromCart, payload:id})
    } else {
        dispatch({type:Types.RemoveOneFromCart, payload:id})
    }
    
}

const clearCartItem = () => {
    dispatch({type:Types.ClearCart})
}
  return (
    <View style={styles.container}>
        <Text style={styles.text}>carrito de compras</Text>
            {products.map((product) => (<ProductItem key={product.id} data={product} addToCartItem ={addToCartItem}/>))}
        <View style={styles.button}>
            <TouchableOpacity
                title='Eliminar carrito'
                onPress={clearCartItem}>
                <Text> Limpiar carrito</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cartContainer}>
        { cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)}
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    text:{
        color:'#F9AC66',
        fontFamily:'Rubik-Regular',
        fontSize:16,
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'#FF6B95',
        padding:5,
        borderRadius:10,
    },
    cartContainer:{
        justifyContent:'space-evenly',
    }
})