import { StyleSheet } from "react-native";




const ButtonStyles = StyleSheet.create({

    buttonLogIn:{
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
    buttonGoogle:{
       backgroundColor: '#FFFFFF',
       width:200,
       height:35,
       borderRadius:20,
       margin:15,
       padding:5,
       justifyContent:'center',
       alignItems:'center',
    },
    textoLogin:{
        color:'#fff',
        fontSize:16,
        lineHeight:15,
    }
});
    
    

export default ButtonStyles;