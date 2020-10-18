import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
import studentService from '../../services/students.service';
import { Student } from '../../services/types';

type StateType = {
    data: Student[]
};

const initialState: StateType = {
    data: [
        { id: 0, name: "tesjiji efeft" },
        { id: 1, name: " wefwee  f" },
    ]
};

export const counterSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        updateStudents: (state, { payload }: PayloadAction<Student[]>) => {
            state.data = payload;
        },
    },
});


export const {
    updateStudents
} = counterSlice.actions;

// Async actions

export function fetchStudents(){
    return async (dispatch: any) => {
        const { data } = await studentService.getAll();
        dispatch(updateStudents(data));
    };
}

export const selectStudents = (state: RootState) => state.students;

export default counterSlice.reducer;