import { combineReducers } from '@reduxjs/toolkit'

import StudentReducer from '../features/students/students.slice';

const rootReducer = combineReducers({
    students: StudentReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;