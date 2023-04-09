import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MyColors } from '../theme/AppTheme'
import { PropsRoundedButton } from './ComponentsPropsInterface'



export const RoundedButton = (properties: PropsRoundedButton) => {
    const { text, onPress } = properties;

    return (
        <TouchableOpacity
            style={styles.roundedButton}
            onPress={() => onPress()}
        >
            <Text style={styles.textButton}>{text}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        borderRadius: 15,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }

})
