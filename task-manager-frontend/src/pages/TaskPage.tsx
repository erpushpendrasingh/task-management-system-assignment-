// src/pages/TaskPage.tsx
import React from "react";
import TaskList from "../components/TaskList";
import TaskFormModal from "../components/TaskFormModal";

const TaskPage: React.FC = () => {
 return (
  <div>
   <TaskFormModal />
   <TaskList />
  </div>
 );
};

export default TaskPage;
