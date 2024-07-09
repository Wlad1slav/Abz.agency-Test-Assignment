'use client'

import { useState, useEffect, useRef } from "react";
import { InputTextProps } from "@/types/props";
import './InputText.scss';

export function InputTextValid(obj: any): obj is InputTextProps {
    return 'label' in obj && 'name' in obj;
}

function InputText({ label, name, type }: InputTextProps) {
    const [isFocused, setIsFocused] = useState(false);

    // Reference to the field to work with it
    const inputRef = useRef<HTMLInputElement | null>(null);

    const blur = (e) => {
        // When the user blurs the field, it is checked whether he has left any text in it.
        // If not left, the focus is removed from the field.
        if (e.target.value.length === 0) {
            setIsFocused(false);
        }
    }

    useEffect(() => {
        // Track input field value changes
        // Needed to set focus when autofilling fields

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

            // Input event handler that ensures correct tracking of changes even with autofill
            inputElement.addEventListener('input', handleAutoFill);
        }
    }, []);

    return (
        <div className={`input-text ${isFocused ? 'focused' : ''}`}>
            <input
                type={type}
                name={name}
                ref={inputRef}
                onFocus={() => setIsFocused(true)}
                onBlur={blur}
            />
            <label>{label}</label>
        </div>
    )
}

export default InputText;
