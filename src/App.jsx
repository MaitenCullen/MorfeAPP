import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './utilities/NavigationStack';
import React from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';




const App = () => {


  const [loaded] = useFonts({
    "Roboto-Regular": require("../assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/Fonts/Roboto-Bold.ttf"),
    "Rubik-Medium": require("../assets/Fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/Fonts/Rubik-Regular.ttf"),
    "SignikaNegative-Regular": require("../assets/Fonts/SignikaNegative-Regular.ttf"),
   });
   if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color='red' />
      </View>
    )
   }
  return (
   <NavigationContainer>
      <NavigationStack/>
   </NavigationContainer>
  );
}

export default App;