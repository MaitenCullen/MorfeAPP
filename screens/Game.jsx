
import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { TouchableWithoutFeedback , Keyboard} from "react-native";
import { stylesGame } from "../styles/stylesGame";
import {Alert} from 'react-native';
import Card from "../src/components/Card";
import TheNumber from "../src/components/TheNumber";
import { CardStyle } from './../styles/CardStyle';
import {TouchableOpacity} from 'react-native-web';



export const Game = ({navigation}) => {

    const [entered, setEntered] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [ selectedNumber, setSelectedNumber] = useState(null)
    const [userNumber, setUserNumber] = useState(null);


    const onHandleStarGame = (selectedNumber) => {
        setUserNumber(selectedNumber);
      };
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
            setConfirmed(true);
            setSelectedNumber(realNumber);
            setEntered(''); 
        }
    }
    const onHandleStartGame = () => {
        onHandleStarGame(selectedNumber);
      };
    
    const Confirmed = () => confirmed ? (
        <Card>
            <Text style={CardStyle.confirmedText}> Numero</Text>
                <TheNumber number={selectedNumber}/>
                <Button title="jueguito" onPress={onHandleStartGame}/>
         </Card> 
    ) : null;


  return (
    <TouchableWithoutFeedback
        onPress={()=> {
            Keyboard.dismiss();
        }}>
         <ScrollView style={stylesGame.scroll}>
            <View style={stylesGame.container}>
                <Text style={stylesGame.title}>Comenzar juego</Text>
                <View style={stylesGame.card}>
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
            <Confirmed/>
            </View>
     </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Game;