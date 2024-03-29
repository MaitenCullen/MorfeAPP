
import { StatusBar, StyleSheet } from "react-native";


const LoginStyles = StyleSheet.create({
    loginContainer:{
        color:'white',
        justifyContent: "center",
        alignContent: "center",
        width:'80%',
        marginTop: StatusBar.currentHeight,
        
    },
    containerImageLogin:{
        flex:3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageLogin:{
        width:80,
        height:80,
    },
    textLogin:{
        color:'white',
        fontSize:20,
        margin:5,
        fontFamily:'SignikaNegative-Regular'
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
 buttonLoginContainer:{
    margin:20,
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignContent:'center'
 },
 buttonLogin:{
    margin:10,
    borderRadius:20,
    shadowRadius:4,
    shadowColor:'rgba(0, 0, 0, 0.30)',
    backgroundColor:'#969FDD',
    width:150,
    height:50,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
 }
})

export default LoginStyles;