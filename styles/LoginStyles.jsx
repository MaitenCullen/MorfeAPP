
import { StyleSheet } from "react-native";


const LoginStyles = StyleSheet.create({
    loginContainer:{
        color:'white',
        justifyContent: "center",
        alignContent: "center",
        width:'80%'
        
    },
    containerImageLogin:{
        flex:3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageLogin:{
        width:100,
        height:100,
    },
    textLogin:{
        color:'white',
        fontSize:20,
        margin:5
    },
    textDate:{
        color:'#F9AC66',
        fontSize:20,
        margin:5,
        justifyContent:'space-between'
    },
    inputLogin:{
        fontSize:20,
        justifyContent: "space-between",
        borderRadius:10,
        padding:3,
        margin:5,
        height:40,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
 },
 containerDate:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'center'
 },
 textDate:{
    color:"#ED6B5B",
    fontSize:20,
    margin:5
 },
 buttonLogin:{
    margin:20,
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignContent:'center'
 }
})

export default LoginStyles;