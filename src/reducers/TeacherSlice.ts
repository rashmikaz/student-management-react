import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeacherModel } from "../models/TeacherModel.ts.ts";
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

