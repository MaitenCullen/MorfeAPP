import { StatusBar, StyleSheet } from "react-native";


const ProfileStyles = StyleSheet.create({
    profileContainer:{
        flex:1,
        backgroundColor: '#3A3E59',
        justifyContent: "center",
        alignContent: "center",
    },
    buttonFav:{
        margin:20,
        borderRadius:20,
        shadowRadius:4,
        shadowColor:'rgba(0, 0, 0, 0.30)',
        backgroundColor:'#F9AC66',
        width:170,
        height:50,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonMaps:{
        margin:20,
        borderRadius:20,
        shadowRadius:4,
        shadowColor:'rgba(0, 0, 0, 0.30)',
        backgroundColor:'#C36B84',
        width:170,
        height:50,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonPromos:{
        margin:20,
        borderRadius:20,
        shadowRadius:4,
        shadowColor:'rgba(0, 0, 0, 0.30)',
        backgroundColor:'#ED6B5B',
        width:170,
        height:50,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
    }

    })

    export default ProfileStyles;