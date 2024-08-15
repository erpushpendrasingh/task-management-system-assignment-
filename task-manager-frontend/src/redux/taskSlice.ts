// src/redux/taskSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../types/Task";
import axios from "axios";

interface TaskState {
 tasks: Task[];
 status: "idle" | "loading" | "succeeded" | "failed";
 error: string | null;
}

const initialState: TaskState = {
 tasks: [],
 status: "idle",
 error: null,
};

// Fetch tasks thunk
export const fetchTasks = createAsyncThunk<Task[]>(
 "tasks/fetchTasks",
 async () => {
  const response = await axios.get("http://localhost:5000/api/tasks");
  return response.data;
 }
);

// Delete task thunk
export const deleteTask = createAsyncThunk<number, number>(
 "tasks/deleteTask",
 async (taskId) => {
  await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
  return taskId;
 }
);

const taskSlice = createSlice({
 name: "tasks",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(fetchTasks.pending, (state) => {
    state.status = "loading";
   })
   .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
    state.status = "succeeded";
    state.tasks = action.payload;
   })
   .addCase(fetchTasks.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message || "Failed to fetch tasks";
   })
   .addCase(deleteTask.fulfilled, (state, action: PayloadAction<number>) => {
    state.tasks = state.tasks.filter((task) => task.id !== action.payload);
   });
 },
});

export default taskSlice.reducer;
