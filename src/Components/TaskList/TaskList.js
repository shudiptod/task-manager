import { useEffect, useState } from "react";
import { listTasks } from "../../Modules/api";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const taskList = await listTasks();
      setTasks(taskList.tasks);
    };
    getData();
  }, []);

  return (
    <div className=" grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
