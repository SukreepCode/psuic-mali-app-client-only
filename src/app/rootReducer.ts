import { combineReducers } from '@reduxjs/toolkit'

import StudentsReducer from '../features/admin/students/students.slice';
import TeachersReducer from '../features/admin/teachers/teachers.slice';
import CriteriaReducer from '../features/admin/criteria/criteria.slice';

import EvaluationReducer from '../features/evaluation/evaluation.slice';

const rootReducer = combineReducers({
    students: StudentsReducer,
    teachers: TeachersReducer,
    criteria: CriteriaReducer,
    evaluation: EvaluationReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;