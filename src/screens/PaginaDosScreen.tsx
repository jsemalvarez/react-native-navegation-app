import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const PaginaDosScreen = () => {

    const navigator = useNavigation<any>()

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina Dos </Text>
            <Button 
                title="Ir pagina 3"
                onPress={ () => navigator.navigate('PaginaTresScreen') }
            />
        </View>
    )
}
