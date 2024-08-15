// src/models/taskModel.ts
import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
 subject: string;
 status: string;
 priority: string;
 assignedTo: string;
 startDate: Date;
 dueDate: Date;
 progress: number;
}

const taskSchema: Schema = new Schema({
 subject: { type: String, required: true },
 status: { type: String, required: true },
 priority: { type: String, required: true },
 assignedTo: { type: String, required: true },
 startDate: { type: Date, required: true },
 dueDate: { type: Date, required: true },
 progress: { type: Number, required: true },
});

export default mongoose.model<ITask>("Task", taskSchema);
