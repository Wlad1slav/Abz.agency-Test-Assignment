'use client'

import { useState } from 'react';
import {RadioBoxProps, RadioButtonProps} from "@/types/props";
import './RadioBox.scss';
import Heading from "@/components/General/Typography/Heading/Heading";

export function RadioBoxValid(obj: any): obj is RadioBoxProps {
    return 'name' in obj && 'internalLabels' in obj && 'mainLabel' in obj;
}

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

function RadioBox({ name, internalLabels, mainLabel }: RadioBoxProps) {
    // The state in which the selected radio label is stored
    const [selectedLabel, setSelectedLabel] = useState<string>('');

    const handleRadioChange = (label: string) => {
        setSelectedLabel(label);
    };

    return (
        <div className="radio-box">
            <Heading option="h3">{mainLabel}</Heading>
            <div>
                {
                    internalLabels.map(label => (
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
        </div>
    );
}

export default RadioBox;
