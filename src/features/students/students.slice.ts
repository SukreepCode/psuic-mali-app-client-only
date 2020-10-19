import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
import studentService from '../../services/students.service';
import { Student } from '../../services/types';

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
};

// Async actions

export const fetch = () => async (dispatch: any) => {
    const { data } = await studentService.getAll();
    dispatch(actions.update(data));
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