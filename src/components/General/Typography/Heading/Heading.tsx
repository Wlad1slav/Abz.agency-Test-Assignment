import React from "react";
import {HeadingProps} from "@/types/props";
import './Heading.css';

function Heading({children, option, ...props}: HeadingProps) {
    const Tag = option;

    // The tag entered in string form by the user is converted to HTML
    return <Tag {...props}>{children}</Tag>;
}

export default Heading;