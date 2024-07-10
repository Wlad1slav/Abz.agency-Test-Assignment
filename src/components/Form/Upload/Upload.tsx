'use client'

import { ChangeEvent, useState } from "react";
import { UploadProps } from "@/types/props";
import Text from "@/components/General/Typography/Text/Text";
import './Upload.scss';
import Field from "@/components/Form/Field/Field";

export function UploadValid(obj: any): obj is UploadProps {
    return 'placeholder' in obj && 'buttonText' in obj && 'name' in obj;
}

function Upload({
    buttonText,
    placeholder,
    accept,
    name,
    onInputStore,
    minSize,
    maxSize,
    resolution,
    error,
    multiple=false,
    ...props
}: UploadProps) {

    const [uploadedFiles, setUploadedFiles] = useState<Array<string>>([]);
    const [validateError, setValidateError] = useState<string>();

    // Validation of the file
    // Validate how much the file weighs, if its img its resolution
    const validateFile = (file: File): boolean => {
        // Check file size
        // The size is given in megabytes
        if (maxSize) {
            if (file.size > maxSize * 1024 * 1024) {
                setValidateError(`File size must not exceed ${maxSize}MB.`);
                return false;
            }
        }

        if (minSize) {
            if (file.size < minSize * 1024 * 1024) {
                setValidateError(`File size must not be less than ${minSize}MB.`);
                return false;
            }
        }

        // Image width and height validation
        if (resolution) {
            const img = new Image();
            img.onload = () => {
                // If the maximum or minimum field is specified for width or height,
                // then it is checked whether the image is equal to it
                if (resolution.minWidth && img.width < resolution.minWidth) {
                    setValidateError(`Image width must be at least ${resolution.minWidth} pixels.`);
                    return false;
                }
                if (resolution.minHeight && img.height < resolution.minHeight) {
                    setValidateError(`Image height must be at least ${resolution.minHeight} pixels.`);
                    return false;
                }
                if (resolution.maxWidth && img.width > resolution.maxWidth) {
                    setValidateError(`Image width must be no more ${resolution.minWidth} pixels.`);
                    return false;
                }
                if (resolution.maxHeight && img.height > resolution.maxHeight) {
                    setValidateError(`Image height must be no more ${resolution.minHeight} pixels.`);
                    return false;
                }
            };
            img.onerror = () => {
                setValidateError('Failed to load image.');
                return false;
            };
            img.src = URL.createObjectURL(file);
        }

        // If the file passed all validation
        setValidateError(undefined);
        return true;
    }

    // Saving in the state uploadedFiles an array with the names of all uploaded files
    const storeUploaded = (e: ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files;
        if (!files) {
            return;
        }
        const validFiles: string[] = [];

        for (const file of Array.from(files)) {
            const isValid = validateFile(file);
            if (isValid) {
                validFiles.push(file.name);
            }
        }

        setUploadedFiles(validFiles);

        if (onInputStore) {
            onInputStore(e);
        }
    }

    return (
        <Field error={`${validateError ?? ''} ${error ?? ''}`}>
            <div {...props} className="upload">
                <label className="file-upload">
                    <input type="file" name={name} onInput={storeUploaded} accept={accept?.join(',')} multiple={multiple} />
                    {buttonText}
                </label>
                {
                    uploadedFiles.length > 0 ? <Text type="ellipsis" className="uploaded">{uploadedFiles.join(', ')}</Text>
                        : <Text type="ellipsis">{placeholder}</Text>
                }
            </div>
        </Field>
    );
}

export default Upload;
