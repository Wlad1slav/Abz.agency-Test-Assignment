'use client'

import { useState } from 'react';
import {RadioBoxProps, RadioButtonProps} from "@/types/props";
import Heading from "@/components/General/Typography/Heading/Heading";
import './RadioBox.scss';
import Field from "@/components/Form/Field/Field";

export function RadioBoxValid(obj: any): obj is RadioBoxProps {
    return 'name' in obj && 'internalLabels' in obj && 'mainLabel' in obj;
}

function RadioButton({ label, value, checked, name, onChange }: RadioButtonProps) {
    return (
        <label>
            <input
                type="radio"
                checked={checked}
                name={name}
                onChange={() => onChange ? onChange(value ?? label) : () => {}}
                value={value ?? label} // if the value isnt specified, then a label is entered in the value parameter
            />
            {label}
        </label>
    );
}

function RadioBox({ name, internalLabels, mainLabel, onChangeStore, error }: RadioBoxProps) {
    // The state in which the selected radio label is stored
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
        if (onChangeStore) {
            // A method to store the selected radio
            onChangeStore(value);
        }
    };

    return (
        <Field error={error}>
            <div className="radio-box">
                <Heading option="h3">{mainLabel}</Heading>
                <div>
                    {
                        internalLabels.map((button) => {
                            // If the value of the selected radio is equal to this value, it is checked
                            const checked = selectedValue === button.value;
                            return <RadioButton {...button} checked={checked} onChange={handleRadioChange} />
                        })
                    }
                </div>
            </div>
        </Field>
    );
}

export default RadioBox;
