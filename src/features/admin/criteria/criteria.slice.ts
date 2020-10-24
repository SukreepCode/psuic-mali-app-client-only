import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import criteriaService from './criteria.service';

import { Criteria } from './criteria.service';
import { AppThunk, AppDispatch } from '../../../app/store';

type StateType = {
    data: Criteria[]
};

const initialState: StateType = {
    data: []
};

// Pure actions

const reducers = {
    
    update: (state: any, { payload }: PayloadAction<Criteria[]>) => {
        state.data = payload;
    },
    add: (state: any, { payload }: PayloadAction<Criteria>) => {
        state.data.push(payload);
    },
    delete: (state: any, { payload }: PayloadAction<string>) => {
        state.data = state.data.filter( (item: Criteria) => (item.id != payload));
    },
    edit: (state: any, { payload }: PayloadAction<{
        id: string,
        data: Criteria
    }>) => {
        const id = payload.id;
        const data = payload.data;
        state.data = state.data.map((item : Criteria) => (item.id == id ? data : item));
    }
};

// Async actions

export const fetchAll = () => async (dispatch: AppDispatch) => {
    const { data } = await criteriaService.getAll();
    dispatch(actions.update(data));
};

export const addData = ( value: Criteria): any => async (dispatch: AppDispatch) => {
    try{
        await criteriaService.add(value);
        dispatch(actions.add(value));
    }
    catch (err){
        throw err;
    }
};

export const deleteData = ( id: string): any =>  async (dispatch: AppDispatch) => {
    try{
        await criteriaService.delete(id);
        dispatch(actions.delete(id));
    }
    catch (err){
        throw err;
    }
};

export const fetch = ( id: string): any =>  (dispatch: AppDispatch) => {
    return criteriaService.get(id);
};

export const editData = ( id: string, data: Criteria): any =>  async (dispatch: AppDispatch) => {

    try{
        await criteriaService.update(id, data);
        dispatch(actions.edit({ id , data }));
    }
    catch (err){
        throw err;
    }

};


// Setup Slice
const slice = createSlice({
    name: 'criteria',
    initialState,
    reducers,
});

export const selector = (state: RootState) => state.criteria;
export const dm1selector = (state: RootState) => state.criteria.data.filter((item:any) => {
    return item.type == "dm1"
});
export const dm2selector = (state: RootState) => state.criteria.data.filter((item:any) => {
    return item.type == "dm2"
});
export const actions =  slice.actions;
export default slice.reducer;