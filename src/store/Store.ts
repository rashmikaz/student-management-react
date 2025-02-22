import {combineReducers, configureStore} from "@reduxjs/toolkit";
import StudentSlice from "../reducers/StudentSlice.ts";

//
// export const store = configureStore({
//     reducer: {
//       student:StudentSlice,
//     },
// });
// export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
    students: StudentSlice,
    //items: ItemSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;