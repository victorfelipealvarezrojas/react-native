import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { RootStackParamsList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

import styles from './Styles';

export const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();
    const { email, password, onChange } = useViewModel();

    const onPress = () => { };

    return (
        <View style={styles.ViewContainer}>
            <Image
                style={styles.imageBackground}
                source={require('../../../../assets/chef.jpg')}
            />
            <View style={styles.ViewLogoContainer}>
                <Image
                    style={styles.logoImage}
                    source={require('../../../../assets/logo.png')}
                />
                <Text style={styles.logoText}>FOOD APP</Text>
            </View>
            <View style={styles.ViewForm}>
                <Text style={styles.formText}>INGRESAR</Text>
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
                    image={require('../../../../assets/password.png')}
                    placeHolder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChange={onChange}
                    value={password}
                    secureTextEntry={true}
                />
                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        text='ENTRAR'
                        onPress={onPress}
                    />
                </View>
                <View style={styles.viewFormRegister}>
                    <Text>No tienes cuenta?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RegisterScreen')}
                    >
                        <Text style={styles.formRegisterText} >Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
} 