import {combineReducers, configureStore} from "@reduxjs/toolkit";
import StudentSlice from "../reducers/StudentSlice.ts";
import TeacherSlice from "../reducers/TeacherSlice.ts";
import SignupSlice from "../reducers/SignupSlice.ts";


const rootReducer = combineReducers({
    students: StudentSlice,
    teachers: TeacherSlice,
    signup: SignupSlice,

})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;