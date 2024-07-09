import React from "react";
import {ButtonOptions, ColorsOptions, FontWeightOptions, HeadingOptions, TextOptions} from "@/types/enums";
    InputTextType,

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
    className?: string;
    type?: TextOptions;
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
 * General/Image/Image.tsx
 * Different types of images
 */

// Standard image
export interface BasicImage {
    src: string;
    alt: string;
}

// A responsive image, in which you can set images for different resolutions and different sizes for different resolutions
export interface ResponsiveImage {
    src: string;
    alt: string;
    srcSet?: string; // List of URLs for different sizes
    sizes?: string; // List of image sizes for different screens
}

// A thumbnail image that you can adjust the height and width of
export interface ThumbnailImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

// A container with a specific image as a background
export interface BackgroundImage {
    src: string;
    alt: string;
    position?: string;
    size?: string;
    children: React.ReactNode;
}

// Delayed loading image
export interface LazyLoadImage {
    src: string;
    alt: string;
    loading: 'lazy' | 'eager';
    placeholderSrc?: string;
}

/**
 * General/Tooltip/Tooltip.tsx
 * Component to display a tooltip when hovering over the component
 */
export interface TooltipProps {
    text: string;
    children: React.ReactNode;
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
 * Form/Field/Field.tsx
 * A form field component
 */
export interface FieldProps {
    children: React.ReactNode;
    error?: string;
    helperText?: string;
}

/**
 * Form/Button/Button.tsx
 * Component for uploading a file
 */
export interface UploadProps {
    placeholder: string;
    buttonText: string;
    accept?: string;
    name: string;
    accept?: string[];
    minSize?: number; // size in megabytes
    maxSize?: number;
    resolution?: {
        maxWidth?: number;
        maxHeight?: number;
        minWidth?: number;
        minHeight?: number;
    };
    onInputStore?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Form/InputText/InputText.tsx
 * Text input field
 */
export interface InputTextProps {
    label: string;
    name: string;
    type: InputTextType;
}

/**
 * Form/RadioBox/RadioBox.tsx
 */
export interface RadioBoxProps {
    name: string;
    labels: string[];
    mainLabel: string;
    internalLabels: string[];
}

export interface RadioButtonProps {
    label: string;
    checked: boolean;
    name: string;
    onChange: (label: string) => void;
}

/**
 * Cards/Cards.tsx
 * Information containers
 */
export interface CardProps {
    title: string;
    content: string[];
    imgUrl: string;
}

export interface CardsProps {
    cards: Array<CardProps>;
}