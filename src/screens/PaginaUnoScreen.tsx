import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any,any>{}

export const PaginaUnoScreen = ( { navigation }: Props ) => {

    useEffect( () => {

        navigation.setOptions({
            headerLeft: () => (
                // navigation.toggleDrawer no lo reconoce
                // <Button 
                //     title="menu"
                //     onPress={ () => navigation.toggleDrawer() }
                // />

                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    // onPress={ () => navigation.toggleDrawer() }
                >
                    <Icon name="menu-outline" size={35} color={ colores.primary } />
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina Uno </Text>

            <Button 
                title="Ir pagina 2"
                onPress={ () => navigation.navigate('PaginaDosScreen') }
            />

            {/* <Button 
                title="Perfil"
                onPress={ () => navigation.navigate('PaginaCuatroScreen')}
            /> */}

            <Text style={{
                marginVertical: 20,
                fontSize:20,
                marginLeft:5
            }}>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor:'#5856D6'
                    }}
                    onPress={ () => navigation.navigate('PaginaCuatroScreen',{
                        id: 1,
                        name: 'Pedro'
                    })}
                >
                    <Icon name="body-outline" size={35} color="white" />
                    <Text style={ styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                     style={{
                        ...styles.botonGrande,
                        backgroundColor:'#FF9427'
                    }}
                    onPress={ () => navigation.navigate('PaginaCuatroScreen',{
                        id: 2,
                        name: 'Titi'
                    })}
                >
                     <Icon name="woman-outline" size={35} color="white" />
                    <Text style={ styles.botonGrandeTexto }>Titi</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}
