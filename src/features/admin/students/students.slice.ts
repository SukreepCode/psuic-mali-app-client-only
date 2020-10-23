import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import studentService from './students.service';

import { Student } from './students.service';
import { AppThunk, AppDispatch } from '../../../app/store';

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
    delete: (state: any, { payload }: PayloadAction<string>) => {
        state.data = state.data.filter( (item: Student) => (item.id != payload));
    },
    edit: (state: any, { payload }: PayloadAction<{
        id: string,
        data: Student
    }>) => {
        const id = payload.id;
        const data = payload.data;
        state.data = state.data.map((item : Student) => (item.id == id ? data : item));
    },
};

// Async actions

export const fetchAll = () => async (dispatch: AppDispatch) => {
    const { data } = await studentService.getAll();
    dispatch(actions.update(data));
};

export const addData = ( value: Student): any => async (dispatch: AppDispatch) => {
    try{
        await studentService.add(value);
        dispatch(actions.add(value));
    }
    catch (err){
        throw err;
    }
};

export const deleteData = ( id: string): any =>  async (dispatch: AppDispatch) => {
    try{
        await studentService.delete(id);
        dispatch(actions.delete(id));
    }
    catch (err){
        throw err;
    }
};

export const fetch = ( id: string): any =>  (dispatch: AppDispatch) => {
    return studentService.get(id);
};

export const editData = ( id: string, data: Student): any =>  async (dispatch: AppDispatch) => {

    try{
        await studentService.update(id, data);
        dispatch(actions.edit({ id , data }));
    }
    catch (err){
        throw err;
    }

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