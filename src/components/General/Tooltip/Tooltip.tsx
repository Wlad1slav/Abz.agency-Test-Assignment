'use client'

import React, { useState } from 'react';
import {TooltipProps} from "@/types/props";
import './Tooltip.scss';

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [visible, setVisible] = useState<boolean>(false);

    // The state in which the tooltip coordinates are stored
    const [position, setPosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });

    const handleMouseOver = (event: React.MouseEvent) => {
        // When hovering the mouse, the coordinates are set
        // slightly below and to the left of the cursor
        const x = event.clientX - 10;
        const y = event.clientY + 15;

        setPosition({ x, y });
        setVisible(true);
    };

    const handleMouseOut = () => {
        setVisible(false);
    };

    return (
        <div
            className="tooltip-wrapper"
            onMouseOver={handleMouseOver}
            onMouseMove={handleMouseOver} /* todo: does it make sense to move the tooltip with the cursor movements? */
            onMouseOut={handleMouseOut}
        >
            {children}
            {visible && (
                <div
                    className="tooltip"
                    style={{ top: `${position.y}px`, left: `${position.x}px` }}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
