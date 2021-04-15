import { StyleButton } from "./style";

export const Button = ({text, bgColor, color, onPress}) => (
    <StyleButton onClick={onPress} >{text}</StyleButton>
);
