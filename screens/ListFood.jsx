

import React from 'react'
import { Alert, FlatList, SafeAreaView, Text } from 'react-native'
import { View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import FoodListSyle from './../styles/FoodListStyle';



 const ListFood = () => {

    const foodList = [
        {
            nombre: 'Hamburguesas',
            color:'#F9AC66',
            tipo:'Comida',
            id:'01'
        },
        {
            nombre: 'Pizzas',
            color:'#C36B84',
            tipo:'Comida',
            id:'02'
        },
        {
            nombre: 'Asado',
            color:'#ED6B5B',
            tipo:'Comida',
            id:'03'
        },
        {
            nombre: 'Sanguches',
            color:'#F9AC66',
            tipo:'Comida',
            id:'04'
        },
        {
            nombre: 'Tortas',
            color:'#C36B84',
            tipo:'Postres',
            id:'05'
        },
        {
            nombre: 'Helados',
            color:'#ED6B5B',
            tipo:'Helados',
            id:'06'
        },
        {
            nombre: 'Cerveza',
            color:'#F9AC66',
            tipo:'Bebida',
            id:'07'
        },
        {
            nombre: 'Vino',
            color:'#C36B84',
            tipo:'Bebida',
            id:'08'
        },


    ]

    const FoodComponent = () => {
        return (
          <SafeAreaView style={{fontWeight:'bold', fontSize:20, backgroundColor:'#3A3E59', flex: 1, alignItems:'center'}}>
            <Text style={FoodListSyle.selectItem}>Comida</Text>
            <Button title='Volver' onPress={()=> setSelectedFood()}/>
          </SafeAreaView>
          )
      }


        const CakeComponent = () => {
        return (
          <SafeAreaView style={{fontWeight:'bold', fontSize:20, backgroundColor:'#3A3E59', flex: 1, alignItems:'center'}}>
            <Text style={FoodListSyle.selectItem}>Tortas</Text>
            <Button title='Volver' onPress={()=> setSelectedFood()}/>
          </SafeAreaView>
          )
      }
      const IceCreamComponent = ({navigation}) => {
        return (
          <SafeAreaView style={{fontWeight:'bold', fontSize:20, backgroundColor:'#3A3E59', flex: 1, alignItems:'center', justifyContent:'space-evenly'}}>
            <Text style={FoodListSyle.selectItem}>Le pegaste, El helado es la mejor comida del mundo</Text>
            <Button title='Volver' onPress={()=> setSelectedFood()}/>
          </SafeAreaView>
          )
      }
      const DrinkComponent = () => {
        return (
          <SafeAreaView style={{fontWeight:'bold', fontSize:20, backgroundColor:'#3A3E59', flex: 1, alignItems:'center'}}>
            <Text style={FoodListSyle.selectItem}>Bebidas</Text>
            <Button title='Volver' onPress={()=> setSelectedFood()}/>
          </SafeAreaView>
          )
      }
     
      const renderComponents = () => {
        switch (selectFood.item.tipo) {
            case "Bebida":
                return <DrinkComponent/>;
            case "Postres":
                return  <CakeComponent/> ;
            case "Comida":
                return <FoodComponent/> ;
            case 'Helados':
                return <IceCreamComponent/>
        }
      }

     
  const FoodsFlatList = ({food}) => {
    const {nombre, id, color, tipo} = food.item
    return (
     <View backgroundColor={color} 
     style={FoodListSyle.item}           >
            <Text style={FoodListSyle.text}
            onPress={()=>onSelectFood(food)}>
             {nombre}
            </Text>
    </View>
    )     
}

const [selectFood, setSelectedFood] = useState() 

const onSelectFood = (food)=> {
 setSelectedFood(food)
}


  return (
  <>
    { !selectFood ?
        <SafeAreaView style={{fontWeight:'bold', fontFamily: 'Roboto-Regular',fontSize:20, backgroundColor:'#3A3E59', flex: 1, alignItems:'center'}}>
        <Text style={FoodListSyle.text}> Adivina la mejor comida del mundo mundial</Text>
        <FlatList
        data={foodList}
        keyExtractor={(food) => food.id}
        renderItem={(food, index)=> <FoodsFlatList food={food}/>}
        ItemSeparatorComponent = {() => <View style={{margin:15}}></View>}
        ListHeaderComponent = {()=> <Text style={{fontWeight:'bold', fontFamily: 'Roboto-Regular', fontSize:30, color:'white', textAlign:'center'}}>Las comidas</Text>}
        />
        </SafeAreaView> : renderComponents()}
        
  </>
    
  )
}

export default ListFood;