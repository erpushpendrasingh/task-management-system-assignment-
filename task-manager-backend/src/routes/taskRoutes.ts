// src/routes/taskRoutes.ts
import express from "express";
import {
 getTasks,
 getTaskById,
 createTask,
 updateTask,
 deleteTask,
} from "../controllers/taskController";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);

export default router;
