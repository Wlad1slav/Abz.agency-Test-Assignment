'use client'

import {ChangeEvent, useState} from "react";
import {UploadProps} from "@/types/props";
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
    ...props
}: UploadProps) {

    const [uploadedFiles, setUploadedFiles] = useState<Array<string>>([]);
    const [validateError, setValidateError] = useState<string | null>(null);

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

        // Check image resolution
        if (resolution) {
            const img = new Image();
            img.onload = () => {
                if (img.width < resolution.minWidth || resolution.minHeight < 70) {
                    setValidateError(`Image resolution must be at least ${resolution.minWidth}x${resolution.minHeight} pixels.`);
                    return false;
                }
                if (img.width > resolution.maxWidth || resolution.maxHeight > 70) {
                    setValidateError(`Image resolution must be no more ${resolution.minWidth}x${resolution.minHeight} pixels.`);
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
        setValidateError(null);
        return true;
    }

    // Saving in the state uploadedFiles an array with the names of all uploaded files
    const storeUploaded = (e: ChangeEvent<HTMLInputElement>) => {
        const files: FileList = e.target.files;
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
        <Field error={validateError ?? ''}>
            <div {...props} className="upload">
                <label className="file-upload">
                    <input type="file" name={name} onInput={storeUploaded} accept={accept?.join(',')} multiple />
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
