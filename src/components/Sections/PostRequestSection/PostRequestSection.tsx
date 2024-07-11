'use client'

import {useEffect, useState} from "react";
import axios from "axios";
import {RadioButtonProps} from "@/types/props";
import FormPost from "@/components/Form/FormPost/FormPost";
import './PostRequestSection.scss';

interface PositionResponse {
    name: string;
    id: string;
}

function PostRequestSection() {
    const [positions, setPositions] = useState<Array<RadioButtonProps>>()

    // Getting positions from the server
    useEffect(() => {
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(r => {
                const positionsResponse: Array<RadioButtonProps> = r.data.positions.map((position: PositionResponse) => {
                    return {label: position.name, value: position.id};
                });
                setPositions(positionsResponse);
            });
    }, []);

    return (
        <FormPost
            requestUrl="https://frontend-test-assignment-api.abz.agency/api/v1/users"
            button="Sign up"
            heading="Working with POST request"
            successMessage="User successfully registered"
            successImg="/success-image.svg"
            fields={[
                {
                    label: "Your name",
                    name: "name",
                    type: "text",
                    min: 2,
                    max: 60
                },
                {label: "Email", name: "email", type: "email"},
                {label: "Phone", name: "phone", type: "tel", helperText: "+38 (XXX) XXX - XX - XX"},
                {
                    name: "position_id",
                    mainLabel: "Select your position",
                    internalLabels: positions ?? []
                },
                {
                    placeholder: "Upload your photo",
                    buttonText: "Upload",
                    name: "photo",
                    maxSize: 5,
                    accept: ["image/jpg", "image/jpeg"],
                    resolution: {
                        minHeight: 70,
                        minWidth: 70
                    }
                },
            ]}
        />
    );
}

export default PostRequestSection;