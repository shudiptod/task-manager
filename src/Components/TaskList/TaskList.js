import { useEffect, useRef, useState } from "react";
import { listTasks, listUsers } from "../../Modules/api";
import TaskCard from "../TaskCard/TaskCard";
import PriorityComponent from "./PriorityComponent";

const TaskList = () => {
  const dateRef = useRef();
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [dateFilter, setDateFilter] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState(null);

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
    <div>
      <div className="flex justify-between">
        <div>
          <h3>View by date</h3>

          <input
            ref={dateRef}
            type="datetime-local"
            onChange={(e) => {
              if (e.target.value) {
                console.log(e.target.value);
                setDateFilter(e.target.value);
              }
            }}
          />
          <button
            onClick={() => {
              setDateFilter(null);
              dateRef.current.value = "";
            }}
          >
            reset
          </button>
        </div>
        <div>
          <h3>View by priority</h3>
          <PriorityComponent
            setPriorityFilter={setPriorityFilter}
            priority={priorityFilter}
          />
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-4">
        {tasks
          .filter((task) =>
            priorityFilter
              ? task.priority === priorityFilter
                ? true
                : false
              : true
          )
          .filter((task) =>
            dateFilter && task.due_date
              ? task.due_date?.split(" ")[0] === dateFilter.split("T")[0]
                ? true
                : false
              : true
          )
          .map((task) => (
            <TaskCard
              setReload={setReload}
              users={users}
              key={task.id}
              task={task}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
