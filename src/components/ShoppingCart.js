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
    dispatch({type:Types.RemoveAllFromCart})
}
  return (
    <View style={styles.cart}>
        <Text>carrito de compras</Text>
        <View  style={styles.item}>
           <Text>
           Productos
            </Text>
            <View>
                {products.map((product) => (<ProductItem key={product.id} data={product} addToCartItem ={addToCartItem}/>))}
            </View>
        </View>
        <View>
            <Text> Carrito</Text>
            <TouchableOpacity
                title='Eliminar carrito'
                onPress={clearCartItem}>
                    <Text> Limpiar carrito</Text>
                </TouchableOpacity>
                { cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)}
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    cart:{

        height:150,
        backgroundColor:'white',
        borderTopColor:'#F9AC66',
        borderTopWidth:3,
    },
    item:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})