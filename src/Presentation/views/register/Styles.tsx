
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ViewContainer: {
        flex: 1,
        backgroundColor: '#0c0c0c',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        bottom: '30%',
        opacity: 0.7,
    },
    ViewForm: {
        width: '100%',
        height: '75%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
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
    ViewLogoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        top: '5%',
    },
    logoImage: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    logoText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    viewFormRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10,
    }
});

export default styles;


