'use client'

import React, {ChangeEvent, useEffect, useState} from "react";
import {FormPostProps} from "@/types/props";
import axios from "axios";
import Button from "@/components/Form/Button/Button";
import InputText, {InputTextValid} from "@/components/Form/InputText/InputText";
import Upload, {UploadValid} from "@/components/Form/Upload/Upload";
import RadioBox, {RadioBoxValid} from "@/components/Form/RadioBox/RadioBox";
import Heading from "@/components/General/Typography/Heading/Heading";
import Image from "@/components/General/Image/Image";
import Text from "@/components/General/Typography/Text/Text";
import './FormPost.scss';

function FormPost({requestUrl, fields, button, successMessage, successImg, heading}: FormPostProps) {

    // The state stores the given data
    const [data, setData] = useState();

    // The state store the given files
    const [files, setFiles] = useState<{[key: string]: File}>({});

    // The state tracks whether the form was completed successfully
    const [success, setSuccess] = useState(false);

    // The state in which all errors that may have occurred
    const [errors, setErrors] = useState<{
        message: string;
        status: number;
        fails: { [key: string]: Array<string> }; // before transferring errors to the field, they are join to a string
    }>();

    // The state stores the request header token
    const [token, setToken] = useState<string>()

    const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeRadioBox = (name: string) => (label: string) => {
        setData({
            ...data,
            [name]: label
        });
    }

    const handleInputFile = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files: inputFiles } = e.target;
        if (inputFiles && inputFiles.length > 0) {
            setFiles({
                ...files,
                [name]: inputFiles[0]
            });
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (token) {
            const formData = new FormData();

            // Append text data
            for (const key in data) {
                formData.append(key, data[key]);
            }

            // Append file data
            for (const key in files) {
                formData.append(key, files[key]);
            }

            // @ts-ignore
            axios.post(requestUrl, formData, { headers: { 'Token': token }})
                .then(() => setSuccess(true))
                .catch(e => setErrors({
                        message: e.response.message,
                        status: e.status,
                        fails: e.response.data.fails
                    })
                );
        } else {
            setErrors({
                message: 'The token expired.',
                status: 401,
                fails: {}
            });
        }
    }

    useEffect(() => {
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(r => {
                setToken(r.data.token);
            });
    }, []);

    return (
        <div className="form-post">
            {
                success ?
                    <div className="success">
                        <Heading option="h2">{successMessage}</Heading>
                        <Image type="normal" src={successImg} alt="success" />
                    </div>
                    :
                    <form onSubmit={handleSubmit}>
                        <Heading option="h2">{heading}</Heading>
                        {
                            fields.map(field => {
                                // Takes an array of errors for a given name and join to a string
                                const error = errors?.fails[field.name]?.join(' ');

                                // Returns a component whose props are equal to the array object's props
                                if (InputTextValid(field))
                                    return <InputText
                                        key={field.name}
                                        error={error}
                                        onChange={handleChangeInputText}
                                        {...field}
                                    />
                                else if (UploadValid(field))
                                    return <Upload
                                        key={field.name}
                                        onInputStore={handleInputFile}
                                        error={error}
                                        {...field}
                                    />
                                else if (RadioBoxValid(field))
                                    return <RadioBox
                                        key={field.name}
                                        error={error}
                                        onChangeStore={handleChangeRadioBox(field.name)}
                                        {...field}
                                    />
                            })
                        }
                        <Button type="submit"> {button} </Button>

                        <Text>{errors && errors['message']}</Text>
                    </form>
            }
        </div>
    );
}

export default FormPost;