import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLAteralBasico = () => {

  const { width } = useWindowDimensions()

  console.log( width )

  return (
    <Drawer.Navigator
        // screenOptions={{
        //     drawerPosition:'right'
        // }}
        screenOptions={{
            drawerType: ( width > 700 ) ? 'permanent' : 'front',
            // headerShown: false // ocualta el icono de hamburguesa 
        }}
        
    >
      <Drawer.Screen name="StackNavigator" options={{title:"Home"}} component={ StackNavigator } />
      <Drawer.Screen name="SettingScreen" options={{title:"Settings"}}  component={ SettingScreen } />
    </Drawer.Navigator>
  );
}