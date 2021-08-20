import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any,any>{}

export const PaginaUnoScreen = ( { navigation }: Props ) => {
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
                    <Text style={ styles.botonGrandeTexto }>Titi</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}
