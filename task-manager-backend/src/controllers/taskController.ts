import { Request, Response } from "express";
import Task from "../models/taskModel";

export const getTasks = async (req: Request, res: Response) => {
 try {
  const tasks = await Task.find();
  res.json(tasks);
 } catch (error: any) {
  res.status(500).json({ message: error.message });
 }
};

export const getTaskById = async (req: Request, res: Response) => {
 try {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
 } catch (error: any) {
  res.status(500).json({ message: error.message });
 }
};

export const createTask = async (req: Request, res: Response) => {
 const { subject, status, priority, assignedTo, startDate, dueDate, progress } =
  req.body;

 try {
  const newTask = new Task({
   subject,
   status,
   priority,
   assignedTo,
   startDate,
   dueDate,
   progress,
  });

  const savedTask = await newTask.save();
  res.status(201).json(savedTask);
 } catch (error: any) {
  res.status(400).json({ message: error.message });
 }
};

export const updateTask = async (req: Request, res: Response) => {
 const { subject, status, priority, assignedTo, startDate, dueDate, progress } =
  req.body;

 try {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.subject = subject || task.subject;
  task.status = status || task.status;
  task.priority = priority || task.priority;
  task.assignedTo = assignedTo || task.assignedTo;
  task.startDate = startDate || task.startDate;
  task.dueDate = dueDate || task.dueDate;
  task.progress = progress || task.progress;

  const updatedTask = await task.save();
  res.json(updatedTask);
 } catch (error: any) {
  res.status(400).json({ message: error.message });
 }
};

export const deleteTask = async (req: Request, res: Response) => {
 try {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  //   await task.remove();
  res.json({ message: "Task removed" });
 } catch (error: any) {
  res.status(500).json({ message: error.message });
 }
};
