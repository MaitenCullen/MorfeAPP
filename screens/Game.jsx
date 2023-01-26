
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { TouchableWithoutFeedback , Keyboard} from "react-native";
import { stylesGame } from "../styles/stylesGame";
import {Alert} from 'react-native';


export const Game = ({navigation}) => {

    const [entered, setEntered] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [ selectedNumber, setSelectedNumber] = useState(null)
    const onHandlerChange =(text) => {
        setEntered(text.replace(/[^0-9]/g,''));
    };

    const onHandlerReset = () => {
        setEntered('');
        setConfirmed(false)
    }

    const onHandlerConfirm = () => {
        const realNumber = parseInt(entered, 10);
        if (isNaN(realNumber) || realNumber <= 0 || realNumber > 99){
            Alert.alert('numero invalido', 'tiene que estar entre 1 y 99', [{text:"ok", style:'destructive', onPress:onHandlerReset }])
        } else {
            setEntered(true);
            setSelectedNumber(realNumber);
            setEntered(''); 
        }
    }
  return (
    <TouchableWithoutFeedback
        onPress={()=> {
            Keyboard.dismiss();
        }}>
        <View style={stylesGame.container}>
            <Text style={stylesGame.title}>Comenzar juego</Text>
            <View style={stylesGame.inputContainer}>
                <Text style={stylesGame.label}>Escribe un numero</Text>
                <TextInput style={stylesGame.input} 
                placeholder="0" 
                value={entered}
                keyboardType='numeric'
                onChangeText={onHandlerChange}
                maxLength={2}
                />
            </View>
            <View style={stylesGame.buttonContainer}>
                <Button title="Reiniciar" onPress={onHandlerReset} color="#C4C9E9" />
                <Button title="Confirmar" onPress={onHandlerConfirm} color="#97A1D8" />
            </View>
      </View>
    </TouchableWithoutFeedback>
  
  );
};

export default Game;