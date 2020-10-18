import { combineReducers } from '@reduxjs/toolkit'

import studentsReducer from '../features/students.slice';

const rootReducer = combineReducers({
    students: studentsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;