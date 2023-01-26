import React, {useState} from 'react'
import { Button, Text, TextInput, View, FlatList, Modal, TouchableOpacity } from 'react-native';
import ButtonStyles from '../styles/ButtonStyles';
import GeneralStyles from '../styles/GeneralStyles';
import Maps from './Maps';

export const List = ({navigation}) => {
	const [food, setFood] = useState('');
	const [foods, setFoods] = useState([]);
	const [seeModal, setSeeModal] = useState(false);
	const [ selectedFood, setSelectedFood] = useState(null);

	const onChangeText = (text) =>{
		setFood(text)
	}
	const onPressButtom = () => {
		setFoods([
			...foods,
			{
				id: Math.random().toString(),
				value: food
			}
		]);
		setFood('');
	}
	const handlerModal = (item) => {
		setSeeModal(!seeModal)
		setSelectedFood(item)
	}
	//quito el map y lo renderizo aparte NO olvidar la KEY//
const renderItem = ({item}) => (
	<TouchableOpacity style={GeneralStyles.foodContainer} onPress={()=> handlerModal(item)}>
		<Text style={GeneralStyles.foodItem} >{item.value}</Text>
	</TouchableOpacity>
)
const keyExtractor =(item) => item.id;

//boton cancelar y eliminar
const cancelBotom = () => {
	setSeeModal(!seeModal);
	setSelectedFood(null);
}

const deleteBotom = () => {
	setFoods((prevFoodsList) => prevFoodsList.filter((foods) => foods.id != selectedFood.id));
	setSeeModal(!seeModal);
}
  return (
	<View style={GeneralStyles.containerList}>
		<Text style={GeneralStyles.textList}>Hola! Contanos cuales son tus comidas favoritas</Text>
	<View style={GeneralStyles.inputContainer}>
		<TextInput style={GeneralStyles.input}
			placeholder="Me gusta comer..."
			autoComplete="off"
			autoCorrect={true}
			autoCapitalize="none"
			value={food}
			inputmode='text'
			placeholderTextColor="#ED6B5B"
			onChangeText={onChangeText} />
		<Button disabled={!food} title="agrega" color='#ED6B5B' onPress={onPressButtom}/>
	</View>
	<View>
		<Maps/>
	</View>
	<View style={GeneralStyles.listView}>
		<FlatList
		data={foods}
		renderItem={renderItem}
		keyExtractor={keyExtractor}
		style={GeneralStyles.listContainer}
		/>
	</View>		
	<View style={ButtonStyles.return}>
		<Button color="#F9AC66" title='Go Back' onPress={()=> navigation.goBack()}/>
	</View>
	<View >
		<Modal visible={seeModal} animationTYpe='slide' style={GeneralStyles.modalContainer}>
			<View style={GeneralStyles.modalStyle}>
			<Text style={GeneralStyles.modalTitle}> Esta es la comida que elegiste</Text>
			<View style={GeneralStyles.modalDetailContainer}>
			<Text style={GeneralStyles.selectedFood}> {selectedFood?.value}</Text>
			<Text style={GeneralStyles.modalStyleDelete}> Quitar comida?</Text>
			</View>
			<View style={GeneralStyles.modalButtomContainer}>
			<Button
			title="cancel"
			color="#F9AC66"
			onPress={cancelBotom}
			/>
			<Button
			title="Eliminar"
			color="#C36B84"
			onPress={deleteBotom}
			/>
			</View>
			</View>
		</Modal>
		</View>
	</View>
   
  )
}
