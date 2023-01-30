import {StyleSheet} from 'react-native';

const FoodListSyle = StyleSheet.create({
        container: {
            marginHorizontal:15,
            backgroundColor:'#3A3E59',
            flex:1,
        },
        text:{
            fontSize: 20,
            color:'white',
            fontWeight:'400',
            textAlign:'center',
            fontFamily:'Rubik-Medium', 
        },
        item:{
            borderRadius:20,
            padding:5,
            marginTop:10,
            alignItems:'center',
        },
        selectItem:{
            fontSize: 60,
             color: 'white'
        }



})
export default FoodListSyle