// src/App.tsx
import React from "react";
import MiniDrawer from "./components/MiniDrawer";
import TaskPage from "./pages/TaskPage";

const App: React.FC = () => {
 return (
  <MiniDrawer>
   <TaskPage />
  </MiniDrawer>
 );
};

export default App;
