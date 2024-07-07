import React from "react";
import {TextProps} from "@/types/props";
import './Text.css';

function Text({children, ...props}: TextProps) {
    return <p className="text-normal" {...props}>{children}</p>
}

export default Text;