import {combineReducers, configureStore} from "@reduxjs/toolkit";
import StudentSlice from "../reducers/StudentSlice.ts";
import TeacherSlice from "../reducers/TeacherSlice.ts";
import UserSlice from "../reducers/UserSlice.ts";


const rootReducer = combineReducers({
    students: StudentSlice,
    teachers: TeacherSlice,
    user: UserSlice,

})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;