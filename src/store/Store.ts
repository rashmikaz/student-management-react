import {combineReducers, configureStore} from "@reduxjs/toolkit";
import StudentSlice from "../reducers/StudentSlice.ts";

const rootReducer = combineReducers({
    customers: StudentSlice,

})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;