import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets()

  return (
    <Tab.Navigator
        style={{
            // es para masnejar SafeArea en ios
            paddingTop: top
        }}
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={ ({ route }) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: { //cambiamos el color de lo que seria el boreder-bottom
                backgroundColor: colores.primary
            },
            tabBarStyle: {
                // en ios es shadowColor:"transparent"
                elevation: 0,
            },
            tabBarIcon: ( props) => {

                let iconName: string = ''
      
                switch( route.name ){
                  case 'Chat':
                    iconName = 'CH'
                    break
                  case 'Contacts':
                    iconName = 'CO'
                    break
                  case 'Albums':
                    iconName = 'AL'
                    break
                }
      
                return <Text style={{ color: props.color }}>{ iconName }</Text>
              }
        })} 
        
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}
