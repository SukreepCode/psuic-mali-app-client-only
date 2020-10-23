import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import teacherService from './teachers.service';

import { Teacher } from './teachers.service';
import { AppThunk, AppDispatch } from '../../../app/store';

type StateType = {
    data: Teacher[]
};

const initialState: StateType = {
    data: []
};

// Pure actions

const reducers = {
    
    update: (state: any, { payload }: PayloadAction<Teacher[]>) => {
        state.data = payload;
    },
    add: (state: any, { payload }: PayloadAction<Teacher>) => {
        state.data.push(payload);
    },
    delete: (state: any, { payload }: PayloadAction<string>) => {
        state.data = state.data.filter( (item: Teacher) => (item.id != payload));
    },
    edit: (state: any, { payload }: PayloadAction<{
        id: string,
        data: Teacher
    }>) => {
        const id = payload.id;
        const data = payload.data;
        state.data = state.data.map((item : Teacher) => (item.id == id ? data : item));
    },
};

// Async actions

export const fetchAll = () => async (dispatch: AppDispatch) => {
    const { data } = await teacherService.getAll();
    dispatch(actions.update(data));
};

export const addData = ( value: Teacher): any => async (dispatch: AppDispatch) => {
    try{
        await teacherService.add(value);
        dispatch(actions.add(value));
    }
    catch (err){
        throw err;
    }
};

export const deleteData = ( id: string): any =>  async (dispatch: AppDispatch) => {
    try{
        await teacherService.delete(id);
        dispatch(actions.delete(id));
    }
    catch (err){
        throw err;
    }
};

export const fetch = ( id: string): any =>  (dispatch: AppDispatch) => {
    return teacherService.get(id);
};

export const editData = ( id: string, data: Teacher): any =>  async (dispatch: AppDispatch) => {

    try{
        await teacherService.update(id, data);
        dispatch(actions.edit({ id , data }));
    }
    catch (err){
        throw err;
    }

};


// Setup Slice
const slice = createSlice({
    name: 'teachers',
    initialState,
    reducers,
});

export const selector = (state: RootState) => state.teachers;
export const actions =  slice.actions;
export default slice.reducer;