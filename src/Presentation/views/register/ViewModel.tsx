import { useState } from 'react';
import { statePropsRegister } from '../ViewsPropsInterface';

const RegisterViewModel = () => {

    const [values, setValues] = useState<statePropsRegister>({
        nombres: '',
        apellidos: '',
        email: '',
        fono: '',
        password: '',
        passwordConfirm: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({
            ...values,
            [property]: value
        });
    }

    const register = () => {

    }

    return {
        ...values,
        onChange,
        register,
    }
}


export default RegisterViewModel;