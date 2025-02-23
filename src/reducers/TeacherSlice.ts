import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeacherModel } from "../models/TeacherModel.ts.ts";
import axios from "axios";
import {StudentModel} from "../models/StudentModel.ts";
import {getStudents} from "./StudentSlice.ts";

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

