import { KeyboardType } from "react-native/types";

export interface PropsCustomText {
    image: any,
    placeHolder: string,
    value: string,
    property: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    onChange: (property: string, value: any) => void,
}

export interface PropsRoundedButton {
    text: String,
    onPress: () => void
}