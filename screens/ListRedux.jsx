import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';
import { ShoppingCart } from '../src/components/ShoppingCart';

export const ListRedux = () => {
  return (
   <View style={styles.container}>
    <ShoppingCart/>	
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:'#3A3E59',
      borderTopWidth:3,
      borderTopColor:'#F9AC66',
      marginTop: StatusBar.currentHeight,
      flex:1,
  },
})