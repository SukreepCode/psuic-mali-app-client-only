import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';

import { AppThunk, AppDispatch } from '../../app/store';

type StateType = {
    type: "dm1" | "dm2" | "";
    criteriaId: string;
};

const initialState: StateType = {
    type: "",
    criteriaId: ""
};

// Pure actions

const reducers = {
    

};

// Async actions


// Setup Slice
const slice = createSlice({
    name: 'evaluation',
    initialState,
    reducers,
});

export const selector = (state: RootState) => state.evaluation;
export const actions =  slice.actions;
export default slice.reducer;