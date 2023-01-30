

import React from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { View } from 'react-native';
import { useState } from 'react';



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
            color:'#ED6B5B',
            tipo:'Postres',
            id:'05'
        },
        {
            nombre: 'Helados',
            color:'#ED6B5B',
            tipo:'Postres',
            id:'06'
        },
        {
            nombre: 'Cerveza',
            color:'#ED6B5B',
            tipo:'Bebida',
            id:'07'
        },
        {
            nombre: 'Vino',
            color:'#ED6B5B',
            tipo:'Bebida',
            id:'08'
        },


    ]

    const FoodComponent = () => {
        return (
          <View>
            <Text style={{ fontSize: 60 }}>Hola</Text>
          </View>
          )
      }


    // const {nombre, color, id, tipo} = food.item
    // const [ selectFood, setSelectFood] = useState({})
    // console.warn( food, 'aca la comida')

    // const OnSelectFood = (food) => {
    // console.log(id, tipo, food)
    // setSelectFood(food)
    // console.log(selectFood, "la comida")
    // }

    
  const FoodsFlatList = ({food}) => {
    const {nombre, id, color, tipo} = food.item
    return (
     <View >
            <Text
            onPress={()=>onSelectFood(food)}
            backgroundColor='red'>
             {nombre}
            </Text>
    </View>
    )     
}
const [selectFood, setSelectedFood] = useState() 

const onSelectFood = (food)=> {

    console.log(food, selectFood !== {}, "Hola mi amor")
 setSelectedFood(food)
}

  return (
  <>
    { !selectFood ?
        <SafeAreaView style={{marginHorizontal:10}}>
        <FlatList
        extraData={()=> console.log(this,'HOLA')}
        data={foodList}
        keyExtractor={(food) => food.id}
        renderItem={(food, index)=> <FoodsFlatList food={food}/>}
        ItemSeparatorComponent = {() => <View style={{marginVertical:10, borderColor:'black', borderWidth:1}}></View>}
        ListHeaderComponent = {()=> <Text style={{fontWeight:'bold', fontSize:15}}>Las comidas</Text>}
        />
   
        </SafeAreaView> : <FoodComponent /> 
        }
        
        
  </>
    
  )
}

export default ListFood;