// src/components/TaskFormModal.tsx
import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Task } from "../types/Task";
// import { addTask } from "../redux/taskSlice";
import { AppDispatch } from "../redux/store";
import { addTask } from "../features/taskSlice";

const style = {
 position: "absolute" as "absolute",
 top: "50%",
 left: "50%",
 transform: "translate(-50%, -50%)",
 width: 400,
 bgcolor: "background.paper",
 boxShadow: 24,
 p: 4,
};

const TaskFormModal: React.FC = () => {
 const [open, setOpen] = useState(false);
 const [task, setTask] = useState<Omit<Task, "id">>({
  subject: "",
  status: "",
  priority: "",
  assignedTo: "",
  startDate: "",
  dueDate: "",
  progress: 0,
 });

 const dispatch = useDispatch<AppDispatch>();

 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTask({
   ...task,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = () => {
  const newTask: Task = { id: Math.random(), ...task };
  dispatch(addTask(newTask));
  handleClose();
 };

 return (
  <div>
   <Button variant="contained" color="primary" onClick={handleOpen}>
    Add Task
   </Button>
   <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   >
    <Box sx={style}>
     <Typography id="modal-modal-title" variant="h6" component="h2">
      Create New Task
     </Typography>
     <TextField
      fullWidth
      label="Subject"
      name="subject"
      value={task.subject}
      onChange={handleChange}
      margin="normal"
     />
     <TextField
      fullWidth
      label="Status"
      name="status"
      value={task.status}
      onChange={handleChange}
      margin="normal"
     />
     <TextField
      fullWidth
      label="Priority"
      name="priority"
      value={task.priority}
      onChange={handleChange}
      margin="normal"
     />
     <TextField
      fullWidth
      label="Assigned To"
      name="assignedTo"
      value={task.assignedTo}
      onChange={handleChange}
      margin="normal"
     />
     <TextField
      fullWidth
      type="date"
      label="Start Date"
      name="startDate"
      value={task.startDate}
      onChange={handleChange}
      margin="normal"
      InputLabelProps={{
       shrink: true,
      }}
     />
     <TextField
      fullWidth
      type="date"
      label="Due Date"
      name="dueDate"
      value={task.dueDate}
      onChange={handleChange}
      margin="normal"
      InputLabelProps={{
       shrink: true,
      }}
     />
     <Button
      onClick={handleSubmit}
      variant="contained"
      color="primary"
      sx={{ mt: 2 }}
     >
      Save Task
     </Button>
    </Box>
   </Modal>
  </div>
 );
};

export default TaskFormModal;
