import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StudentModel } from "../models/StudentModel.ts";
import axios from "axios";

const initialState: StudentModel[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/",
});


export const getStudents = createAsyncThunk(
    "student/getStudents",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/Student/view");
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to load student");
        }
    }
);


export const saveStudent = createAsyncThunk(
    "student/saveStudent",
    async (student: StudentModel, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.post("/Student/add", student);
            dispatch(getStudents()); // Fetch updated customers list
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to save student");
        }
    }
);


export const updatedStudent = createAsyncThunk(
    "student/updateStudent",
    async ({ email, student }: { email: string; student: StudentModel }, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.put(`/Student/update/${email}`, student);
            dispatch(getStudents()); // Fetch updated customers list
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to update student");
        }
    }
);


export const deletedStudent = createAsyncThunk(
    "student/deleteStudent",
    async (email: string, { dispatch, rejectWithValue }) => {
        try {
            await api.delete(`/Student/delete/${email}`);
            dispatch(getStudents()); // Fetch updated customers list
            return email;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to delete student");
        }
    }
);

const StudentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getStudents.fulfilled, (_, action) => action.payload)
            .addCase(getStudents.rejected, (state, action) => {
                console.error("Error fetching students:", action.payload);
            })


            .addCase(saveStudent.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveStudent.rejected, (state, action) => {
                console.error("Error saving customer:", action.payload);
            })


            .addCase(updatedStudent.fulfilled, (state, action) => {
                const index = state.findIndex((c) => c.email === action.payload.email);
                if (index >= 0) state[index] = action.payload;
            })
            .addCase(updatedStudent.rejected, (state, action) => {
                console.error("Error updating customer:", action.payload);
            })


            .addCase(deletedStudent.fulfilled, (state, action) => {
                return state.filter((student) => student.email !== action.payload);
            })
            .addCase(deletedStudent.rejected, (state, action) => {
                console.error("Error deleting studenyt:", action.payload);
            });
    },
});

export default StudentSlice.reducer;