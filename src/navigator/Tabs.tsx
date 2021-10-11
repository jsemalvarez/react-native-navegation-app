import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1Screen } from '../screens/Tab1Screen';
// import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {

  return Platform.OS === 'ios'
          ? <TabIOS />
          : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ( { color, focused } ) => {

          let iconName: string = ''

          switch( route.name ){
            case 'Tab1Screen':
              iconName = 'bandage-outline'
              break
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break
            case 'StackNavigator':
              iconName = 'bookmarks-outline'
              break
          }

          return <Icon name={ iconName } size={20} color={ color } />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ( { color, focused, size} ) => {

          let iconName: string = ''

          switch( route.name ){
            case 'Tab1Screen':
              iconName = 'bandage-outline'
              break
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break
            case 'StackNavigator':
              iconName = 'bookmarks-outline'
              break
          }

          return <Icon name={ iconName } size={30} color={ color } />
        }
      })}
      
    >
      {/* <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon:(props) => <Text style={{ color: props.color }}>T1</Text>}} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}