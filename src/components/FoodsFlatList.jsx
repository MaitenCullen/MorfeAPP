// import React, { useState } from 'react'
// import { Button, StyleSheet, Text, View } from 'react-native'





// const FoodComponent = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 60 }}>Hola</Text>
//     </View>
//     )
// }
  

// export const FoodsFlatList = ({food}) => {

//   // const [ deleteList, setDeleteList] = useState({})
//   //   const deleteFood =({food}) => {
//   //     setDeleteList()
//   //   }


//    const {nombre, color, id, tipo} = food.item

//   const [ selectFood, setSelectFood] = useState([])
//    console.warn( food, 'aca la comida')

//    const OnSelectFood = (food) => {
//     console.log(id, tipo, food)
//    setSelectFood([food])
//     console.log(selectFood, "la comida")
//   }
   
//   return (
//     <>
//       { selectFood != [] ?
//         <View style={stylesFoodList.container}>
//           <Text
//           onPress={() => OnSelectFood(tipo)}
//           backgroundColor='red'>
//             {nombre}
//           </Text>
//       </View> : <FoodComponent/> }
//     </>
    
//   )
//  }

// const stylesFoodList = StyleSheet.create({
//     container:{
//         padding:5,
//         borderRadius:10,
//     }

// })