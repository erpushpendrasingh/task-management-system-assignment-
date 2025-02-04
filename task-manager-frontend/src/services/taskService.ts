// src/services/taskService.ts
import axios from "axios";
import { Task } from "../types/Task";

const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = async (): Promise<Task[]> => {
 const response = await axios.get(API_URL);
 return response.data;
};

export const createTask = async (task: Task): Promise<Task> => {
 const response = await axios.post(API_URL, task);
 return response.data;
};

export const updateTask = async (task: Task): Promise<Task> => {
 const response = await axios.put(`${API_URL}/${task.id}`, task);
 return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
 await axios.delete(`${API_URL}/${id}`);
};
