import React from "react";
import {ButtonOptions, ColorsOptions, FontWeightOptions, HeadingOptions} from "@/types/enums";

/**
 * General/Typography/Font/Font.tsx
 * Component that adjusts the weight of the text and its font
 */
export interface FontProps {
    children: React.ReactNode;
    weight?: FontWeightOptions;
}

/**
 * General/Typography/Heading/Heading.tsx
 * Component for adding h1, h2, etc. heading on a page
 */
export interface HeadingProps {
    children: React.ReactNode;
    option: HeadingOptions;
}

/**
 * General/Typography/Text/Text.tsx
 * Component for adding plain text
 */
export interface TextProps {
    children: React.ReactNode;
}

/**
 * General/Background/Background.tsx
 * Component for creating a container with a background of a given color
 */
export interface BackgroundProps {
    children: React.ReactNode;
    color: ColorsOptions;
}

/**
 * Form/Button/Button.tsx
 * Button component
 */
export interface ButtonProps {
    children: React.ReactNode;
    color?: ColorsOptions;
    disabled?: boolean;
    onClick?: () => void;
    type?: ButtonOptions;
}

/**
 * Form/ErrorController/ErrorController.tsx
 * Error output component
 */
export interface ErrorControllerProps {
    children: React.ReactNode;
    error?: string;
}