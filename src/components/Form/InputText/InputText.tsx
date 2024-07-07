'use client'

import {useState} from "react";
import {InputTextProps} from "@/types/props";
import './InputText.scss';

function InputText({label, helperText}: InputTextProps) {
    const [isFocused, setIsFocused] = useState(false);

    const blur = (e) => {
        if (e.target.value.length === 0) {
            setIsFocused(false);
        }
    }

    return (
        <div className={`input-text ${isFocused ? 'focused' : ''}`}>
            <input
                type="text"
                onFocus={() => setIsFocused(true)}
                onBlur={blur}
            />
            <label>{label}</label>
        </div>
    )
}

export default InputText;