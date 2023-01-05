import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateTask from "./Pages/CreateTask";
import TaskList from "./Pages/TaskList";

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-red-800">Task Manager</h1>
      <Routes>
        <Route path="/" index element={<TaskList />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
