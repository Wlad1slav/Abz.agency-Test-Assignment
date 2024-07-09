import {BackgroundImage, BasicImage, LazyLoadImage, ResponsiveImage, ThumbnailImage} from "@/types/props";

// Possible colors
export type ColorsOptions = 'primary' | 'secondary' | 'light-grey';

// Possible heading options
export type HeadingOptions = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// Possible font weight options
export type FontWeightOptions = 'normal' | 'bold';

// Possible button types
export type ButtonOptions = 'button' | 'submit' | 'reset';

// Possible image types
export type ImageProps =
    | ({ type: 'normal' } & BasicImage) // Default image with alt & src
    | ({ type: 'responsive' } & ResponsiveImage) // Adaptive image with props to adapt to different resolutions
    | ({ type: 'thumbnail' } & ThumbnailImage) // Miniature image
    | ({ type: 'background' } & BackgroundImage) // A container with a specific background
    | ({ type: 'lazy' } & LazyLoadImage) // Delayed loading image

// Possible text types
export type TextOptions =
    | 'normal'
    | 'ellipsis' // If the text is longer than its width or the width of its parent, it is truncated

// Input field type
export type InputTextType = 'text' | 'email' | 'number' | 'tel';