import { useState } from 'react';
import { statePropsHome } from '../ViewsPropsInterface';


const HomeViewModel = () => {

    const [values, setValues] = useState<statePropsHome>({
        email: '',
        password: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({
            ...values,
            [property]: value
        });
    }

    return {
        ...values,
        onChange,
    }
}


export default HomeViewModel;