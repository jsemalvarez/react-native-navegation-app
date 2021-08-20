import React from 'react'
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { MenuLAteral } from './src/navigator/MenuLateral';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLAteralBasico } from './src/navigator/MenuLateralBasico';


const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLAteralBasico /> */}
      <MenuLAteral />
    </NavigationContainer>
  )
}

export default App;