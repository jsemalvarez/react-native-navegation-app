import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLAteral = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator       
      screenOptions={{
          drawerType: ( width > 700 ) ? 'permanent' : 'front',
      }}

      drawerContent={ (props) => <MenuInterno { ...props } /> }
        
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingScreen" component={ SettingScreen } />
    </Drawer.Navigator>
  );
}

/**
 * La navegacion que vien en DrawerContentComponentProps cierra automaticamente el menu lateral
 */

const MenuInterno = ({ navigation }: DrawerContentComponentProps ) => {

  return(
   <DrawerContentScrollView>

     {/* Parte del avatar */}
     <View style={ styles.avatarContainer }>
       <Image 
          source={{
            uri:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }}
          style={ styles.avatar}
       />
     </View>

     {/* Opciones de Menu */}

     <View style={ styles.menuContainer }>

      <TouchableOpacity 
        style={ styles.menuBoton }
        onPress={ () => navigation.navigate('Tabs')}
      >
        <Text style={ styles.menuTexto }>Navegacion</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={ styles.menuBoton }
        onPress={ () => navigation.navigate('SettingScreen')}
      >
        <Text style={ styles.menuTexto }>Ajustes</Text>
      </TouchableOpacity>

     </View>
   </DrawerContentScrollView>
  )
}