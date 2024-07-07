import React from "react";
import {FontProps} from "@/types/props";
import './Font.scss';

function Font({children, weight = 'normal'}: FontProps) {
    return (
        <span className={`font ${weight}`}>
            {children}
        </span>
    );
}

export default Font;