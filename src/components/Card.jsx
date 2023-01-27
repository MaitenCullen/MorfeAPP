
import React from "react";
import { Text, View } from "react-native";

import { CardStyle } from './../../styles/CardStyle';
import TheNumber from "./TheNumber";



const Card = ({ children }) => {
  return (
        <View style={CardStyle.containerCard}>
            <Text style={CardStyle.children}>{children} </Text>
        </View>
  );
}

export default Card;