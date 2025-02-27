import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeacherModel } from "../models/TeacherModel.ts";
import axios from "axios";

const initialState: TeacherModel[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/",
});

export const getTeachers = createAsyncThunk(
    "teacher/getTeachers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/Teacher/view");
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to load teacher");
        }
    }
);

export const saveTeacher = createAsyncThunk(
    "teacher/saveTeacher",
    async (teacher: TeacherModel, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.post("/Teacher/add", teacher);
            dispatch(getTeachers()); // Fetch updated teachers list
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to save teacher");
        }
    }
);

export const updatedTeacher = createAsyncThunk(
    "teacher/updateTeacher",
    async ({ email, teacher }: { email: string; teacher: TeacherModel }, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.put(`/Teacher/update/${email}`, teacher);
            dispatch(getTeachers()); // Fetch updated teacher list
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to update teacher");
        }
    }
);

export const deletedTeacher = createAsyncThunk(
    "teacher/deleteTeacher",
    async (email: string, { dispatch, rejectWithValue }) => {
        try {
            await api.delete(`/Teacher/delete/${email}`);
            dispatch(getTeachers()); // Fetch updated teacher list
            return email;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to delete teacher");
        }
    }
);
const TeacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getTeachers.fulfilled, (_, action) => action.payload)
            .addCase(getTeachers.rejected, (state, action) => {
                console.error("Error fetching teacher:", action.payload);
            })


            .addCase(saveTeacher.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveTeacher.rejected, (state, action) => {
                console.error("Error saving teacher:", action.payload);
            })


            .addCase(updatedTeacher.fulfilled, (state, action) => {
                const index = state.findIndex((c) => c.email === action.payload.email);
                if (index >= 0) state[index] = action.payload;
            })

            .addCase(updatedTeacher.rejected, (state, action) => {
                console.error("Error updating teacher:", action.payload);
            })


            .addCase(deletedTeacher.fulfilled, (state, action) => {
                return state.filter((teacher) => teacher.email !== action.payload);
            })
            .addCase(deletedTeacher.rejected, (state, action) => {
                console.error("Error deleting teacher:", action.payload);
            });
    },
});
export default TeacherSlice.reducer;

