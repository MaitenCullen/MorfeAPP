import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './utilities/NavigationStack';
import React from 'react';


const App = () => {
  return (
   <NavigationContainer>
   <NavigationStack/>
   </NavigationContainer>

  );
}

export default App;