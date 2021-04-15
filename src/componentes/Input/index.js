import React, { useState } from "react";
import { InputWrapper, Label, InputType, InputContainer, IconWrapper } from "./style";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const iconStyle = {
    fontSize: '20px',
    color: '#ccc'
}

const Icono = ({showEye,onPress}) => (
    <IconWrapper onClick={onPress}>
        {
            showEye ? <FaEyeSlash style={iconStyle} /> : <FaEye style={iconStyle} />
        }        
    </IconWrapper>
)

export const Input = ({label, type, placeholder}) => {

//    const [showPassword, setShowPassword] = useState(false);
    const [typeIput, setTypeInput] = useState(type);

    const toogleTypeInput = (e) => {
        setTypeInput(typeIput==='password' ? 'text' : 'password');
    }

    return(
        <InputContainer>
            <Label>{label}</Label>
            <InputWrapper>
                <InputType placeholder={placeholder} type={typeIput} />
                {type === "password" && <Icono onPress={toogleTypeInput} showEye={typeIput==="text"} />}
            </InputWrapper>            
        </InputContainer>

    )
}
