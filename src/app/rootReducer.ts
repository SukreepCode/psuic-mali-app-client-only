import { combineReducers } from '@reduxjs/toolkit'

import StudentsReducer from '../features/admin/students/students.slice';
import TeachersReducer from '../features/admin/teachers/teachers.slice';

const rootReducer = combineReducers({
    students: StudentsReducer,
    teachers: TeachersReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;