import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignuptModel } from "../models/SignupModel.ts";
import axios from "axios";

const initialState: SignuptModel[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/",
});


export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/User/view");
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to load user");
        }
    }
);

export const saveUser = createAsyncThunk(
    "user/saveUser",
    async (user: SignuptModel, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.post("/User/add", user);
            dispatch(getUsers()); // Fetch updated customers list
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to save user");
        }
    }
);