import { combineReducers } from '@reduxjs/toolkit'

import StudentsReducer from '../features/admin/students/students.slice';
import TeachersReducer from '../features/admin/teachers/teachers.slice';
import CriteriaReducer from '../features/admin/criteria/criteria.slice';

const rootReducer = combineReducers({
    students: StudentsReducer,
    teachers: TeachersReducer,
    criteria: CriteriaReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;