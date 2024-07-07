'use client'

import {useState} from "react";
import {UploadProps} from "@/types/props";
import './Upload.scss';
import Text from "@/components/General/Typography/Text/Text";

function Upload({buttonText, placeholder, accept, ...props}: UploadProps) {

    const [uploadedFiles, setUploadedFiles] = useState<Array<string>>([]);

    // Saving in the state uploadedFiles an array with the names of all uploaded files
    const storeUploaded = (e) => {
        const files: string[] = Array.from(e.target.files).map(file => file.name);
        setUploadedFiles(files);
    }

    return (
        <div {...props} className="upload">
            <label className="file-upload">
                <input type="file" onInput={storeUploaded} accept={accept} multiple />
                {buttonText}
            </label>
            {
                uploadedFiles.length > 0 ? <Text className="uploaded">{uploadedFiles.join(', ')}</Text>
                    : <Text>{placeholder}</Text>
            }
        </div>
    );
}

export default Upload;
