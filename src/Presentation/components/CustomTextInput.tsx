import React from 'react'
import {
    Image,
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import { PropsCustomText } from './ComponentsPropsInterface';


export const CustomTextInput = (properties: PropsCustomText) => {
    const {
        image,
        placeHolder,
        value,
        keyboardType,
        secureTextEntry = false,
        property,
        onChange,
    } = properties;

    return (
        <View style={styles.ViewFormInput}>
            <Image
                style={styles.formIcon}
                source={image}
            />
            <TextInput
                style={styles.formTextInput}
                placeholder={placeHolder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={text => onChange(property, text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    formIcon: {
        width: 30,
        height: 30,
        marginTop: 5,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15,
    },
    ViewFormInput: {
        flexDirection: 'row',
        marginTop: 30
    },
});