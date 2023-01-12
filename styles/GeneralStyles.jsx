import { StyleSheet } from "react-native";

const GeneralStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3A3E59',
      alignItems: 'center',
      justifyContent: 'center'
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
  },
  textSigUp:{
    color:'#fff',
    fontWeight:'500',
    fontSize:20,
    width:200,
    textAlign: 'center',
  }
  });
  

  export default GeneralStyles;