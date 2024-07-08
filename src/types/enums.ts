import {BackgroundImage, BasicImage, LazyLoadImage, ResponsiveImage, ThumbnailImage} from "@/types/props";

// Possible colors
export type ColorsOptions = 'primary' | 'secondary' | 'light-grey';

// Possible heading options
export type HeadingOptions = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// Possible font weight options
export type FontWeightOptions = 'normal' | 'bold';

// Possible button types
export type ButtonOptions = 'button' | 'submit' | 'reset';

// Image options
export type ImageProps =
    | ({ type: 'normal' } & BasicImage) // Default image with alt & src
    | ({ type: 'responsive' } & ResponsiveImage) // Adaptive image with props to adapt to different resolutions
    | ({ type: 'thumbnail' } & ThumbnailImage) // Miniature image
    | ({ type: 'background' } & BackgroundImage) // A container with a specific background
    | ({ type: 'lazy' } & LazyLoadImage) // Delayed loading image