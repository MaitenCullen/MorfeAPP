
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/Home";
import { LogIn } from "../../screens/LogIn";
import { List } from './../../screens/List';
import ListFood from "../../screens/ListFood";
import Maps from "../../screens/Maps";



const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return (
        <Stack.Navigator  initialRouteName="Home">
            <Stack.Screen  
            name="Home"
            component={Home}
            initialParams={{fromChild:"initial"}}/>
            <Stack.Screen
            name="Login"
            title="Iniciar Sesión"
            component={LogIn}
            />
            <Stack.Screen
            name="List"
            title="Lista desafio"
            component={List}/>
            <Stack.Screen
            name="ListFood"
            title="Lista comida desafio"
            component={ListFood}/>
            <Stack.Screen
            name="Maps"
            title="Maps"
            component={Maps}/>
        </Stack.Navigator>
    )
}