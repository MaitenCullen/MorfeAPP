import React from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { ShoppingCart } from '../src/components/ShoppingCart';

export const ListRedux = () => {
  return (
    <ScrollView>
   <View style={styles.container}>
    <ShoppingCart/>	
   </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:'#3A3E59',
      borderTopWidth:3,
      borderTopColor:'#F9AC66',
      marginTop:0,
      flex:1,
  },
})