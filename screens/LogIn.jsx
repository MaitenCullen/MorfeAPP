import React, { useState } from 'react'
import { Button, StatusBar, Text, Platform, View, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native';
import GeneralStyles from '../styles/GeneralStyles';
import LoginStyles from '../styles/LoginStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../database/Firebase';



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

const [ state, setState] = useState({
  name:'',
  lastname: '',
  email: '',
  provincia: '',
  ciudad: ''
})

const SaveNewUser = () => {
  if ( state.name === '') {
    alert('pone un nombre')
  } else {
     const user = collection(db, 'user')
     addDoc(user, {
      state,
     })
  }
}
const handleChangeText = (name, value) => {
  setState({...state, [name]:value})
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
              placeholder=""
              onChangeText={(value)=> handleChangeText('name', value)} />
          <Text style={LoginStyles.textLogin} >Apellido</Text>
          <TextInput style={LoginStyles.inputLogin}
              inputmode='text'
              placeholderTextColor="#ED6B5B"
              placeholder=""
              onChangeText={(value)=> handleChangeText('lastname', value)}/>
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
              placeholder=""
              onChangeText={(value)=> handleChangeText('provincia', value)}/>
          <Text style={LoginStyles.textLogin} >Ciudad</Text>
          <TextInput style={LoginStyles.inputLogin}
              inputmode='text'
              placeholderTextColor="#ED6B5B"
              placeholder=""
              onChangeText={(value)=> handleChangeText('ciudad', value)}/>
          <Text style={LoginStyles.textLogin} >Email</Text>
          <TextInput style={LoginStyles.inputLogin}
              inputmode='text'
              placeholderTextColor="#ED6B5B"
              placeholder=""
              onChangeText={(value)=> handleChangeText('email', value)}/>
          <View style={LoginStyles.buttonLogin}>
            <View>
              <Button title='Go Back' onPress={()=> SaveNewUser()}/>
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
