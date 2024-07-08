import React from "react";
import {TextProps} from "@/types/props";
import './Text.css';

function Text({children, type='normal', className='', ...props}: TextProps) {
    return <p className={`${type} ${className}`} {...props}>{children}</p>
}

export default Text;