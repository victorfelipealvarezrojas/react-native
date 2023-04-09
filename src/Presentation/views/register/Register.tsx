import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Image, View, Text } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { RootStackParamsList } from '../../../../App';
import { CustomTextInput } from '../../components/CustomTextInput';
import useViewModel from './ViewModel';

import styles from './Styles';

export const RegisterScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();
    const {
        email,
        nombres,
        apellidos,
        fono,
        password,
        passwordConfirm,
        onChange,
        register,
    } = useViewModel();


    return (
        <View style={styles.ViewContainer}>
            <Image
                style={styles.imageBackground}
                source={require('../../../../assets/chef.jpg')}
            />
            <View style={styles.ViewLogoContainer}>
                <Image
                    style={styles.logoImage}
                    source={require('../../../../assets/user_image.png')}
                />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>
            <View style={styles.ViewForm}>
                <Text style={styles.formText}>REGISTRARSE</Text>
                <CustomTextInput
                    image={require('../../../../assets/user.png')}
                    placeHolder='Nombres'
                    keyboardType='default'
                    property='nombres'
                    onChange={onChange}
                    value={nombres}
                    secureTextEntry={false}
                />
                <CustomTextInput
                    image={require('../../../../assets/my_user.png')}
                    placeHolder='Apellidos'
                    keyboardType='default'
                    property='apellidos'
                    onChange={onChange}
                    value={apellidos}
                    secureTextEntry={false}
                />
                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeHolder='Correo electronico'
                    keyboardType='email-address'
                    property='email'
                    onChange={onChange}
                    value={email}
                    secureTextEntry={false}
                />
                <CustomTextInput
                    image={require('../../../../assets/phone.png')}
                    placeHolder='Telefono'
                    keyboardType='phone-pad'
                    property='fono'
                    onChange={onChange}
                    value={fono}
                    secureTextEntry={false}
                />
                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeHolder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChange={onChange}
                    value={password}
                    secureTextEntry={true}
                />
                <CustomTextInput
                    image={require('../../../../assets/confirm_password.png')}
                    placeHolder='Confirmar Contraseña'
                    keyboardType='default'
                    property='passwordConfirm'
                    onChange={onChange}
                    value={passwordConfirm}
                    secureTextEntry={true}
                />
                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        text='CONFIRMAR'
                        onPress={register}
                    />
                </View>
            </View>
        </View>
    );
}