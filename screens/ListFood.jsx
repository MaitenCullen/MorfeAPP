

import React from 'react'
import { Alert, FlatList, SafeAreaView, Text } from 'react-native'
import { View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import FoodListSyle from './../styles/FoodListStyle';
import ButtonStyles from './../styles/ButtonStyles';
import { TouchableOpacity } from 'react-native';




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
            <Text style={FoodListSyle.selectItem}>30%off</Text>
            <TouchableOpacity
            style={ButtonStyles.returnButton}  onPress={()=> setSelectedFood()}>
              <Text>Volver</Text>
            </TouchableOpacity>
          </SafeAreaView>
          )
      }


        const CakeComponent = () => {
        return (
          <SafeAreaView style={{fontWeight:'bold', fontSize:20, backgroundColor:'#3A3E59', flex: 1, alignItems:'center'}}>
            <Text style={FoodListSyle.selectItem}>45% off</Text>
            <TouchableOpacity
            style={ButtonStyles.returnButton}  onPress={()=> setSelectedFood()}>
              <Text>Volver</Text>
            </TouchableOpacity>
          </SafeAreaView>
          )
      }
      const IceCreamComponent = ({navigation}) => {
        return (
          <SafeAreaView style={{fontWeight:'bold', fontSize:20, backgroundColor:'#3A3E59', flex: 1, alignItems:'center', justifyContent:'space-evenly'}}>
            <Text style={FoodListSyle.selectItem}>El helado es la mejor comida del mundo, 3x2 en 1/4</Text>
            <TouchableOpacity
            style={ButtonStyles.returnButton}  onPress={()=> setSelectedFood()}>
              <Text>Volver</Text>
            </TouchableOpacity>
          </SafeAreaView>
          )
      }
      const DrinkComponent = () => {
        return (
          <SafeAreaView style={{fontWeight:'bold', fontSize:16, backgroundColor:'#3A3E59', flex: 1, alignItems:'center'}}>
            <Text style={FoodListSyle.selectItem}>Nos encanta la birra, 2x3 en pintas y 50% off en vinos</Text>
            <TouchableOpacity
            style={ButtonStyles.returnButton}  onPress={()=> setSelectedFood()}>
              <Text>Volver</Text>
            </TouchableOpacity>
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
        <Text style={FoodListSyle.text}> Elegi tu favorito y llevate un descuento</Text>
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