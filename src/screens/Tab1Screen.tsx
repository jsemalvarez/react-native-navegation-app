import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
/**
 * esta libreria no esta escrita para typescript, por eso, quizas muestre un error que 
 * se soluciona con la sugerencia que propone npm i --save-dev @types/react-native-vector-icons
 */
import Icon from 'react-native-vector-icons/Ionicons';

import { colores, styles } from '../theme/appTheme'


export const Tab1Screen = () => {

    useEffect( () => {
        console.log('Tab1Screen effect')
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Iconos </Text>

            <Text>
                <Icon name="airplane-outline" size={30} color="#900" />
                <Icon name="body-outline" size={30} color={ colores.primary } />
                <Icon name="american-football-outline" size={30} color="green" />
                <Icon name="battery-charging-outline" size={30} color="blue" />
                <Icon name="cart-outline" size={30} color="blue" />
            </Text>

        </View>
    )
}
