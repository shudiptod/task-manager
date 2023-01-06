import { useEffect, useState } from "react";
import { listTasks, listUsers } from "../../Modules/api";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const taskList = await listTasks();
      setTasks(taskList.tasks);
      const userList = await listUsers();
      setUsers(userList.users);
    };
    getData();
  }, [reload]);

  return (
    <div className=" grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard
          setReload={setReload}
          users={users}
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskList;
