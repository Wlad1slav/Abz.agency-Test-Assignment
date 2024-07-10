import React from 'react';
import {ImageProps} from "@/types/enums";


function Image(props: ImageProps) {
    switch (props.type) {

        case 'normal':
            return <img src={props.src} alt={props.alt} />;

        case 'responsive':
            return (
                <img
                    src={props.src}
                    alt={props.alt}
                    srcSet={props.srcSet}
                    sizes={props.sizes}
                />
            );

        case 'thumbnail':
            return (
                <img
                    src={props.src}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                />
            );

        case 'background':
            const { children, src, alt, position, size, className, ...rest } = props;
            return (
                <div
                    className={className}
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: position ?? 'center',
                        backgroundSize: size ?? 'cover',
                        ...rest,
                    }}
                    aria-label={alt}
                >{children}</div>
            );

        case 'lazy':
            return (
                <img
                    src={props.src}
                    alt={props.alt}
                    loading={props.loading}
                    data-placeholder={props.placeholderSrc}
                />
            );

        default: return null;
    }
}

export default Image;
