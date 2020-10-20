import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
import studentService from '../../services/students.service';

import { Student } from '../../services/types';
import { AppThunk, AppDispatch } from '../../app/store';

type StateType = {
    data: Student[]
};

const initialState: StateType = {
    data: []
};

// Pure actions

const reducers = {
    update: (state: any, { payload }: PayloadAction<Student[]>) => {
        state.data = payload;
    },
    add: (state: any, { payload }: PayloadAction<Student>) => {
        state.data.push(payload);
    },
};

// Async actions

export const fetch = () => async (dispatch: AppDispatch) => {
    const { data } = await studentService.getAll();
    dispatch(actions.update(data));
};

export const addDatabase = ( value: Student): AppThunk =>  (dispatch: AppDispatch) => {
        return studentService.add(value);
};

// Setup Slice
const slice = createSlice({
    name: 'students',
    initialState,
    reducers,
});

export const selector = (state: RootState) => state.students;
export const actions =  slice.actions;
export default slice.reducer;