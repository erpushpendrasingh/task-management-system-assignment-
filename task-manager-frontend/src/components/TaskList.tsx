// src/components/TaskList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store"; // Ensure AppDispatch is exported from your store
import { fetchTasks, deleteTask } from "../redux/taskSlice";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList: React.FC = () => {
 const dispatch: AppDispatch = useDispatch(); // Explicitly typing the dispatch
 const tasks = useSelector((state: RootState) => state.tasks.tasks);
 const status = useSelector((state: RootState) => state.tasks.status);
 const error = useSelector((state: RootState) => state.tasks.error);

 useEffect(() => {
  if (status === "idle") {
   dispatch(fetchTasks());
  }
 }, [dispatch, status]);

 const handleDelete = (taskId: number) => {
  dispatch(deleteTask(taskId));
 };

 return (
  <div>
   {status === "loading" && <p>Loading tasks...</p>}
   {status === "failed" && <p>{error}</p>}
   {status === "succeeded" && (
    <List>
     {tasks.map((task) => (
      <ListItem
       key={task.id}
       secondaryAction={
        <IconButton
         edge="end"
         aria-label="delete"
         onClick={() => handleDelete(task.id)}
        >
         <DeleteIcon />
        </IconButton>
       }
      >
       <ListItemText primary={task.subject} secondary={task.status} />
      </ListItem>
     ))}
    </List>
   )}
  </div>
 );
};

export default TaskList;
