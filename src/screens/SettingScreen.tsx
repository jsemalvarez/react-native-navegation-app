import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

export const SettingScreen = () => {

    //De esta manera, evitamos el annidar componentes para manejar el top de la app
    const insets = useSafeAreaInsets()

    return (
        <View 
            style={{ 
                ...styles.globalMargin,
                marginTop: insets.top + 20
            }}
        >
            <Text style={ styles.title }> SettingScreen </Text>
        </View>
    )
}
