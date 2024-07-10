'use client'

import { useState } from 'react';
import {Radio} from "@mui/material";
import {RadioBoxProps, RadioButtonProps} from "@/types/props";
import Field from "@/components/Form/Field/Field";
import Font from "@/components/General/Typography/Font/Font";
import Text from "@/components/General/Typography/Text/Text";
import './RadioBox.scss';

export function RadioBoxValid(obj: any): obj is RadioBoxProps {
    return 'name' in obj && 'internalLabels' in obj && 'mainLabel' in obj;
}

function RadioButton({ label, value, checked, name, onChange }: RadioButtonProps) {
    const color = {
        color: '#D0CFCF',
        '&.Mui-checked': {
            color: '#00BDD3',
        },
    }

    return (
        <label>
            <Radio
                sx={color}
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
                <Font weight="normal">
                    <Text>{mainLabel}</Text>
                </Font>
                <div>
                    {
                        internalLabels.map((button) => {
                            // If the value of the selected radio is equal to this value, it is checked
                            const checked = selectedValue === button.value;
                            return <RadioButton
                                key={button.value}
                                {...button}
                                name={name}
                                checked={checked}
                                onChange={handleRadioChange}
                            />
                        })
                    }
                </div>
            </div>
        </Field>
    );
}

export default RadioBox;
