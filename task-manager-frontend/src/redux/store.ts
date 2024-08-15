// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

export const store = configureStore({
 reducer: {
  tasks: taskReducer,
 },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {tasks: TaskState}
export type AppDispatch = typeof store.dispatch;
