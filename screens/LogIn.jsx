import React, { useState } from 'react'
import { Button, StatusBar, Text, Platform, View, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native';
import GeneralStyles from '../styles/GeneralStyles';
import LoginStyles from '../styles/LoginStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import NavigationTab from '../src/utilities/NavigationTab';

export const LogIn = ({navigation}) => {
const [date, setDate] = useState (new Date());
const [ mode, setMode] = useState('date');
const [ show, setShow] =  useState (false);
const [text, setText] = useState ('Vacio');

const onChange =(event, selectedDate)  => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);

  let tempDate = new Date(currentDate);
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
  let fTime =  tempDate.getHours() + ' Horas ' + tempDate.getMinutes() + ' Min' ;
  setText(fDate + ' | ' + fTime)

  console.log(fDate + '(' + fTime + ')') 
}

const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
}

  return (
      <View style={GeneralStyles.container}>
        <StatusBar style='auto'/>
          <View style={LoginStyles.loginContainer}>
          <View style={LoginStyles.containerImageLogin}>
            <Image style={LoginStyles.imageLogin}
              source={require('../assets/hamburger1.png')}
                />
          </View>
          <Text style={LoginStyles.textLogin} >Nombre</Text>
          <TextInput style={LoginStyles.inputLogin}
              inputmode='text'
              placeholderTextColor="#ED6B5B"
              placeholder=""/>
          <Text style={LoginStyles.textLogin} >Apellido</Text>
          <TextInput style={LoginStyles.inputLogin}
              inputmode='text'
              placeholderTextColor="#ED6B5B"
              placeholder=""/>
          <Text style={LoginStyles.textLogin}>Selecciona tu fecha nacimiento</Text>
          <View style={LoginStyles.containerDate}>
            <View>
              <TouchableOpacity style={LoginStyles.inputLogin} onPress={()=> showMode('date')}>
              <Text style={LoginStyles.textDate}>Fecha</Text>
              </TouchableOpacity>  
            </View>
            <View>
              <TouchableOpacity style={LoginStyles.inputLogin} onPress={()=> showMode('time')}>
                <Text style={LoginStyles.textDate}>Hora</Text>
              </TouchableOpacity>   
            </View>
          </View>
          <Text style={LoginStyles.textDate}>{text}</Text>
          {show && (<DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
          />)}
         <Text style={LoginStyles.textLogin} >Provincia</Text>
          <TextInput style={LoginStyles.inputLogin}
              inputmode='text'
              placeholderTextColor="#ED6B5B"
              placeholder=""/>
          <Text style={LoginStyles.textLogin} >Ciudad</Text>
          <TextInput style={LoginStyles.inputLogin}
              inputmode='text'
              placeholderTextColor="#ED6B5B"
              placeholder=""/>
          <View style={LoginStyles.buttonLogin}>
            <View>
              <Button title='Go Back' onPress={()=> navigation.goBack()}/>
            </View>
            <View>
              <Button title='ir a la lista' onPress={()=>navigation.navigate('ListFood')}></Button>
            </View>
            <View>
              <Button title='Maps' onPress={()=>navigation.navigate('Maps')}></Button>
            </View>
          </View>
          </View>
      </View>

    )
}
