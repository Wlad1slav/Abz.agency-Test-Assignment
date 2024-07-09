'use client'

import { useState, useEffect, useRef } from "react";
import { InputTextProps } from "@/types/props";
import Field from "@/components/Form/Field/Field";
import './InputText.scss';

export function InputTextValid(obj: any): obj is InputTextProps {
    return 'label' in obj && 'name' in obj;
}

function validateInput(type, value, min, max) {
    let error = '';
    if (min && value.length < min) {
        error = `Minimum length is ${min}`;
    } else if (max && value.length > max) {
        error = `Maximum length is ${max}`;
    } else if (type === 'email') {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(value)) {
            error = 'Invalid email address';
        }
    } else if (type === 'tel') {
        const phonePattern = /^\+380\d{9}$/;
        if (!phonePattern.test(value)) {
            error = 'Phone number must start with +380 and have 9 digits after it';
        }
    }
    return error;
}

function InputText({ label, name, type, onChange, max, min, error }: InputTextProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [validateError, setValidateError] = useState<string>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const blur = (e) => {
        if (e.target.value.length === 0) {
            setIsFocused(false);
        }
        const validationError = validateInput(type, e.target.value, min, max);
        setValidateError(validationError);
    }

    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        }
        const validationError = validateInput(type, e.target.value, min, max);
        setValidateError(validationError);
    }

    useEffect(() => {
        const inputElement = inputRef.current;
        if (inputElement) {
            const handleAutoFill = () => {
                if (inputElement.value.length > 0) {
                    setIsFocused(true);
                } else {
                    setIsFocused(false);
                }
            };
            handleAutoFill();
            inputElement.addEventListener('input', handleAutoFill);
        }
    }, []);

    return (
        <Field error={`${validateError ?? ''} ${error ?? ''}`}>
            <div className={`input-text ${isFocused ? 'focused' : ''}`}>
                <input
                    type={type}
                    name={name}
                    ref={inputRef}
                    onFocus={() => setIsFocused(true)}
                    onBlur={blur}
                    onChange={handleChange}
                />
                <label>{label}</label>
            </div>
        </Field>
    );
}

export default InputText;
