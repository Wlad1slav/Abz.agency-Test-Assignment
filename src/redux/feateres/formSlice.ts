'use client'

import {createSlice} from "@reduxjs/toolkit";

export interface FormSlice {
    formCompleted: boolean;
}

const initialState: FormSlice = {
    formCompleted: false
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setComplete: (state, action) => {
            state.formCompleted = action.payload;
        },
    }
});

export const { setComplete } = formSlice.actions;

export default formSlice.reducer;