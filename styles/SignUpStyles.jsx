import { StyleSheet } from "react-native";


const SignUpStyles = StyleSheet.create({
    imageStyle: {
        width:100,
        height:100,
    },
    containerSignUp:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    input:{
        fontSize: 20,
        fontWeight: '400',
        height:50,
        borderBottomColor:"#F9AC66",
        borderBottomWidth:2,
        color:"white",
        marginBottom:20,
        width:200,
        fontFamily:'Rubik-Regular',
      },
      button:{
        margin:15,
        borderRadius:20,
        shadowRadius:4,
        shadowColor:'rgba(0, 0, 0, 0.30)',
        backgroundColor:'#ED6B5B',
        width:145,
        height:35,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
      },
      textButton:{
        fontSize:16,
        fontFamily:'Rubik-Regular',
      }

})
export default SignUpStyles;