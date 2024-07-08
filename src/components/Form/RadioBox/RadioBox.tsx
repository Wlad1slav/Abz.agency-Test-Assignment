'use client'

import { useState } from 'react';
import {RadioBoxProps, RadioButtonProps} from "@/types/props";
import './RadioBox.scss';

function RadioButton({ label, checked, name, onChange }: RadioButtonProps) {
    return (
        <label>
            <input
                type="radio"
                checked={checked}
                name={name}
                onChange={() => onChange(label)}
            />
            {label}
        </label>
    );
}

function RadioBox({ name, labels }: RadioBoxProps) {
    // The state in which the selected radio label is stored
    const [selectedLabel, setSelectedLabel] = useState<string>('');

    const handleRadioChange = (label: string) => {
        setSelectedLabel(label);
    };

    return (
        <div className="radio-box">
            {
                labels.map(label => (
                    <RadioButton
                        key={label}
                        label={label}
                        checked={selectedLabel === label} // If the label of the selected radio is equal to this label, it is checked
                        name={name}
                        onChange={handleRadioChange}
                    />
                ))
            }
        </div>
    );
}

export default RadioBox;
