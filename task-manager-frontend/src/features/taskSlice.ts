// src/features/taskSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

interface TaskState {
 tasks: Task[];
}

const initialState: TaskState = {
 tasks: [],
};

const taskSlice = createSlice({
 name: "tasks",
 initialState,
 reducers: {
  addTask(state, action: PayloadAction<Task>) {
   state.tasks.push(action.payload);
  },
  updateTask(state, action: PayloadAction<Task>) {
   const index = state.tasks.findIndex((task) => task.id === action.payload.id);
   if (index !== -1) {
    state.tasks[index] = action.payload;
   }
  },
  deleteTask(state, action: PayloadAction<number>) {
   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
  },
 },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
