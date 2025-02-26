import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
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
            dispatch(getUsers());
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to save user");
        }
    }
);

export const updatedUser = createAsyncThunk(
    "user/updateUser",
    async ({ email, user }: { email: string; user: SignuptModel }, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.put(`/User/update/${email}`, user);
            dispatch(getUsers());
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to update user");
        }
    }
);

export const deletedUser = createAsyncThunk(
    "user/deleteUser",
    async (email: string, { dispatch, rejectWithValue }) => {
        try {
            await api.delete(`/User/delete/${email}`);
            dispatch(getUsers());
            return email;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to delete user");
        }
    }
);

const SignupSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getUsers.fulfilled, (_, action) => action.payload)
            .addCase(getUsers.rejected, (state, action) => {
                console.error("Error fetching users:", action.payload);
            })


            .addCase(saveUser.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveUser.rejected, (state, action) => {
                console.error("Error saving user:", action.payload);
            })


            .addCase(updatedUser.fulfilled, (state, action) => {
                const index = state.findIndex((c) => c.email === action.payload.email);
                if (index >= 0) state[index] = action.payload;
            })
            .addCase(updatedUser.rejected, (state, action) => {
                console.error("Error updating user:", action.payload);
            })


            .addCase(deletedUser.fulfilled, (state, action) => {
                return state.filter((user) => user.email !== action.payload);
            })
            .addCase(deletedUser.rejected, (state, action) => {
                console.error("Error deleting user:", action.payload);
            });
    },
});

export default SignupSlice.reducer;
