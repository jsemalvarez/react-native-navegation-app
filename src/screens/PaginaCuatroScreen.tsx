import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'

interface RouteParams{
    id: number,
    name: string
}

// FORMA RAPIDA Y POCO ELEGANTE - FORMA RAPIDA Y ELEGANTE
// interface Props extends StackScreenProps<any,any>{}

//FORMA ELEGANTE Y RECOMENDADA
interface Props extends StackScreenProps<RootStackParams,'PaginaCuatroScreen'>{}

export const PaginaCuatroScreen = ( { route, navigation }: Props) => {

    // FORMA RAPIDA Y POCO ELEGANTE
    // const params = route.params

    // useEffect(() => {
    //     navigation.setOptions({
    //         title: params!.name
    //     })
    // },[])


    // FORMA RAPIDA Y ELEGANTE
    // const params = route.params as RouteParams


    const params = route.params

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    },[])


    return (
        <View>
            <Text style={ styles.title }> Perfil </Text>
        </View>
    )
}
