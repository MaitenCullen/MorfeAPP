import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

const GeneralStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3A3E59',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight,
    },
    containerList:{
      backgroundColor: '#3A3E59',
      color:"white",
      alignItems:"center",
    },
    containerImage:{
      flex:3,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    image:{
      width:350,
      height:300,
    },
    buttonContainer: {
      alignItems:'center',
      justifyContent:'center',
      flex:2,
    },
    textHome:{
      color:'#fff',
      fontWeight:'600',
      fontSize:40,
      fontFamily:'Rubik-Regular'
    },
    textSigUp:{
      color:'#fff',
      fontWeight:'500',
      fontSize:20,
      width:200,
      textAlign: 'center',
      fontFamily:'Roboto-Bold'

    },
    inputContainer:{
      justifyContent: "space-evenly",
      alignItems: 'center',
      paddingVertical: 30,
      paddingHorizontal: 10,
      marginBottom: 10,
      borderRadius: 10,
      width:"100%",
    },
    input:{
      fontSize: 20,
      fontWeight: 'bold',
      height:30,
      borderBottomColor:"#F9AC66",
      borderBottomWidth:2,
      color:"white",
      marginBottom:20,
      fontFamily:'Roboto-Bold'
    },
    listView:{
      justifyContent: "space-between",
      alignItems: "center",
    },
    listContainer:{
      marginHorizontal:20,
      marginTop:40,
    },
    foodContainer:{
      flexDirection: "row",
      alignItems:"center",
      paddingVertical:15,
      paddingHorizontal:15,
      backgroundColor:"#C36B84",
      marginBottom:15,
      borderRadius:10,
      textAlign:"center",
      alignContent:"center",
    },
    foodItem:{
      fontSize:23,
      color:"white",
      fontWeight:"bold",
      textAlign:"center",
      alignContent:"center",
    },
    modalContainer:{
      backgroundColor:"red",
    },
    modalStyle:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:50,
      paddingVertical:20
    },
    modalDetailContainer:{
      paddingVertical:20,
    },
    modalTitle:{
      fontSize:15,
      fontWeight:"bold",
      marginBottom:15,
      fontFamily:'Roboto-Regular'
    },
    modalStyleDelete:{
      fontSize:14,
      color:"black"
    },
    selectedFood:{
      fontSize:25,
      color:"#3A3E59",
      fontWeight:"bold",
      paddingVertical:10,
      textAlign:"center",
      marginBottom:20,
    },
    modalButtomContainer:{
      width:"65%",
      flexDirection:"row",
      justifyContent: "space-around",
      marginHorizontal:20
      
    },
    textList:{
      color:"white",
      fontSize:25,
      fontWeight: "bold",
      padding:10,
    }
  });
  

  export default GeneralStyles;