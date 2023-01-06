import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import CreateTask from "./Pages/CreateTask";
import TaskList from "./Pages/TaskList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="w-11/12 mx-auto my-8">
        <Routes>
          <Route path="/" index element={<TaskList />} />
          <Route path="/create-task" element={<CreateTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
