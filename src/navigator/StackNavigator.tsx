import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { PaginaCuatroScreen } from '../screens/PaginaCuatroScreen';
import { PaginaDosScreen } from '../screens/PaginaDosScreen';
import { PaginaTresScreen } from '../screens/PaginaTresScreen';
import { PaginaUnoScreen } from '../screens/PaginaUnoScreen';

// usamos type y no const porque no va a expandirse 
export type RootStackParams = {
  PaginaUnoScreen: undefined,
  PaginaDosScreen: undefined,
  PaginaTresScreen: undefined,
  PaginaCuatroScreen: { id: number, name: string },
}
/**
 * de esta manera, no solo tipamos todos los parametros de las rutas
 * sino que tambien definimos el del Stack.Screen
 */

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="PaginaCuatroScreen" // establecemos el top del stack
      screenOptions={{
        
        headerStyle:{
          // quitar sombra en Android
          elevation: 0,
          // quitar sombra en IOS
          shadowColor: 'transparent' 
        },

        cardStyle:{
          backgroundColor:'white'
        }
      }}

    >
      <Stack.Screen name="PaginaUnoScreen" options={{ title:"Pagina 1"}} component={ PaginaUnoScreen } />
      <Stack.Screen name="PaginaDosScreen" options={{ title:"Pagina 2"}} component={ PaginaDosScreen } />
      <Stack.Screen name="PaginaTresScreen" options={{ title:"Pagina 3"}} component={ PaginaTresScreen } />
      <Stack.Screen name="PaginaCuatroScreen" options={{ title:"Pagina 4"}} component={ PaginaCuatroScreen } />
    </Stack.Navigator>
  );
}