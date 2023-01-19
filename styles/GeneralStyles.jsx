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
  },
  inputContainer:{
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  input:{
    fontSize: 14,
    fontWeight: 'bold',
    width:"65%",
    height:30,
    borderBottomColor:"E5446D",
    borderBottomWidth:3
  },
  listContainer:{
    marginHorizontal:20,
    marginTop:40,
  },
  foodContainer:{
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#E5446D",
    marginBottom:15,
    borderRadius:10
  },
  foodItem:{
    fontSize:16,
    color:"white",
    fontWeight:"bold",
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
    marginBottom:15
  },
  modalStyleDelete:{
    fontSize:14,
    color:"black"
  },
  selectedFood:{
    fontSize:14,
    color:"blue",
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
  }
  });
  

  export default GeneralStyles;