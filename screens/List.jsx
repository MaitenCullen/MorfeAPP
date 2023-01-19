import React, {useState} from 'react'
import { Button, Text, TextInput, View, FlatList, Modal, TouchableOpacity } from 'react-native';
import ButtonStyles from '../styles/ButtonStyles';
import GeneralStyles from '../styles/GeneralStyles';

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
    <View>
    <View style={GeneralStyles.inputContainer}>
        <TextInput style={GeneralStyles.input}
            placeholder="agrega una comida que te guste"
            autoComplete="off"
            autoCorrect={true}
            autoCapitalize="none"
            value={food}
            onChangeText={onChangeText} />
        <Button disabled={!food} title="agrega" color='red' onPress={onPressButtom}/>
        </View>
        <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={GeneralStyles.listContainer}
        />
        <Modal visible={seeModal} animationTYpe='slide' >
            <View style={GeneralStyles.modalStyle}>
            <Text style={GeneralStyles.modalTitle}> hiciste click</Text>
            <View style={GeneralStyles.modalDetailContainer}>
            <Text style={GeneralStyles.modalStyleDelete}> Quitar comida</Text>
            <Text style={GeneralStyles.selectedFood}> {selectedFood?.value}</Text>
            </View>
            <View style={GeneralStyles.modalButtomContainer}>
            <Button
            title="cancel"
            color="red"
            onPress={cancelBotom}
            />
            <Button
            title="Eliminar"
            color="blue"
            onPress={deleteBotom}
            />
            </View>
            </View>
        </Modal>
        <View style={ButtonStyles.return}>
        <Button color="blue" title='Go Back' onPress={()=> navigation.goBack()}/>
        </View>
    </View>
   
  )
}
