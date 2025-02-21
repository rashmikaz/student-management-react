import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {StudentModel} from "../models/StudentModel.ts";
import axios from "axios";

const initialState : StudentModel[]=[];

const api = axios.create({
    baseURL : "http://localhost:3000/"
})

export const saveStudent = createAsyncThunk(
    'customer/saveCustomer',
    async (student: StudentModel) => {
        try {
            const response = await api.post('/Student/add', student);
            return response.data;
        } catch (error) {
            return console.log('error',error);
        }
    }
);
export const updatedStudent = createAsyncThunk(
    'student/updateStudent',
    async ({ email, student }: { email: string; student: StudentModel }) => {
        try {
            const response = await api.put(`/Student/update/${email}`, student);
            return response.data;
        } catch (error) {
            return console.log('error', error);

        }
    }
);
export const getStudent = createAsyncThunk(
    'student/getStudent',
    async () => {
        try {
            const response = await api.get('/Student/view');
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);
export const deletedStudent = createAsyncThunk(
    'student/deleteStudent',
    async (email: string) => {
        try {
            const response = await api.delete(`/Student/delete/${email}`);
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);


const StudentSlice = createSlice({
    name:"student",
    initialState:initialState,
    reducers:{
        addStudent:(state,action)=>{
            state.push(action.payload);
        },
        updateStudent: (state, action) => {
            return state.map(student =>
                student.email === action.payload.email
                    ? new StudentModel(action.payload.name, action.payload.nic, action.payload.email, action.payload.phone)
                    : student
            );
        },
        deleteStudent: (state, action) => {
            return state.filter(student => student.email !== action.payload);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(saveStudent.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveStudent.rejected, (state, action) => {
                console.error("Failed to save student:", action.payload);
            })
            .addCase(saveStudent.pending, (state, action) => {
                console.error("Pending");
            })

            .addCase(updatedStudent.fulfilled, (state, action) => {
                const index = state.findIndex(c => c.email === action.payload.email);
                if (index >= 0) {
                    state[index] = action.payload;
                }
            })
            .addCase(updatedStudent.rejected, (state, action) => {
                console.error("Failed to update customer:", action.payload);
            })
            .addCase(updatedStudent.pending, (state, action) => {
                console.error("Pending");
            })

            .addCase(getStudent.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(getStudent.rejected, (state, action) => {
                console.error("Failed to load customers:", action.payload);
            })
            .addCase(getStudent.pending, (state, action) => {
                console.error("Pending");
            })

            .addCase(deletedStudent.fulfilled, (state, action) => {
                return state.filter(customer => customer.email !== action.payload);
            })
            .addCase(deletedStudent.rejected, (state, action) => {
                console.error("Failed to delete customer:", action.payload);
            })
            .addCase(deletedStudent.pending, (state, action) => {
                console.error("Pending");
            });


    }


})
export const {addStudent,updateStudent,deleteStudent} = StudentSlice.actions;
export default StudentSlice.reducer;