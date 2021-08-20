import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any,any>{}

export const PaginaTresScreen = ( { navigation }: Props) => {
    return (
        <View style={ styles.globalMargin } >
            <Text style={ styles.title }>Pagina Tres </Text>

            <Button 
                title="Regresar"
                onPress={ () => navigation.pop() }
            />

            <Button 
                title="Ir Pagina 1"
                onPress={ () => navigation.popToTop() }
            />

        </View>
    )
}
