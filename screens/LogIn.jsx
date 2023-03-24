import React, { useState } from 'react'
import { Button, StatusBar, Text, Platform, View, Image, ScrollView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native';
import GeneralStyles from '../styles/GeneralStyles';
import LoginStyles from '../styles/LoginStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

import { createUserWithEmailAndPassword , getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { db, firebaseConfig } from './../database/Firebase';
import { collection } from 'firebase/firestore';




export const LogIn = ({navigation}) => {

  const auth = getAuth();
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
  ciudad: '',
  password: ''
})

const handleCreateAccount = () => {
  createUserWithEmailAndPassword(auth, state.email, state.password)
  .then((userCredential) => {
    const newUser = collection(db, 'user')
    addDoc(newUser, {
     state,
  })
  const user = userCredential.user;
  console.log(user)
  console.log('Account created!')
  .catch(error => {
    console.log(error)
    Alert.alert(error.message)
  })
})
}




const SaveNewUser = () => {
  if ( state.name === '') {
    alert('pone un nombre')
  } else {
   navigation.navigate('Perfil')
   handleCreateAccount()
  }
}
const handleChangeText = (name, value) => {
  setState({...state, [name]:value})
}

  return (
    <ScrollView>
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
               <Text style={LoginStyles.textLogin} >Contraseña</Text>
          <TextInput style={LoginStyles.inputLogin}
              inputmode='text'
              placeholderTextColor="#ED6B5B"
              placeholder=""
              secureTextEntry={true}
              onChangeText={(value)=> handleChangeText('password', value)}/>
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
    </ScrollView>
   

    )
}
