import { useEffect, useState } from "react";
import { listTasks } from "../../Modules/api";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const taskList = await listTasks();
      console.log("🚀 ~ file: TaskList.js:8 ~ getData ~ taskList", taskList);
      setTasks(taskList.tasks);
    };
    getData();
  }, []);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
