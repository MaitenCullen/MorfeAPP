import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({

    containerCard: {
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:15,
        margin:20,
        height:80,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        elevation: 3,
      },
      confirmedText:{
        fontSize:16,
        color:'blue'
      },
      children:{
    
      }



})