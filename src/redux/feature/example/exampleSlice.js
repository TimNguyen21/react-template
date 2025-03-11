import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    description: 'Hello world',
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        updateDescription: (state, value) => {
            state.description = value.payload;
        },
        updateDescriptionToDefault: () => {
            return initialState;
        },
    }
});

export const { updateDescription, updateDescriptionToDefault } = exampleSlice.actions;
export default exampleSlice.reducer;
