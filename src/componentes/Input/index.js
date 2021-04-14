import React, { useState } from "react";
import { InputWrapper, Label, InputType } from "./style";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const Icono = ({showEye,onPress}) => (
    <span onClick={onPress}>
        {
            showEye ? <FaEyeSlash /> : <FaEye />
        }        
    </span>
)

export const Input = ({label, type, placeholder}) => {

//    const [showPassword, setShowPassword] = useState(false);
    const [typeIput, setTypeInput] = useState(type);

    const toogleTypeInput = (e) => {
        setTypeInput(typeIput==='password' ? 'text' : 'password');
    }

    return(
        <section>
            <Label>{label}</Label>
            <InputWrapper>
                <InputType placeholder={placeholder} type={typeIput} />
                {type === "password" && <Icono onPress={toogleTypeInput} showEye={typeIput==="text"} />}
            </InputWrapper>
            
        </section>

    )
}
