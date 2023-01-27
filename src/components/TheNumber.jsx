import React from "react"
import {View} from 'react-native';
import {Text} from 'react-native';
import { TheNumberStyles } from "../../styles/TheNumberStyles";


const TheNumber = ({number}) => {
    return (
        <View style={TheNumberStyles.numberContainer}>
            <Text style={TheNumberStyles.number}>{number}</Text>
        </View>
    )
}
export default TheNumber;