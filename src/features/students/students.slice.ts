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
    updateStudents: (state: any, { payload }: PayloadAction<Student[]>) => {
        state.data = payload;
    },
};

// Async actions

export const fetchStudents = () => async (dispatch: any) => {
    const { data } = await studentService.getAll();
    dispatch(updateStudents(data));
};

// Setup Slice
const slice = createSlice({
    name: 'students',
    initialState,
    reducers,
});

// Export actions
export const {
    updateStudents
} = slice.actions;

// Export selector for accessing the state data
export const selectStudents = (state: RootState) => state.students;
// Export reducer
export default slice.reducer;