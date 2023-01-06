import React, { useState } from "react";
import UpdateCard from "./UpdateCard";

const TaskCard = ({ task, users, setReload }) => {
  const [editState, setEditState] = useState(false);
  return (
    <div
      className="my-4 mx-auto p-5 w-full border  border-black"
      draggable={!editState}
    >
      {editState ? (
        <UpdateCard
          setReload={setReload}
          setEditState={setEditState}
          users={users}
          task={task}
        />
      ) : (
        <>
          <h3 className="my-4">{task.message}</h3>
          <h5 className="my-4">Priority: {task.priority}</h5>
          <h5 className="my-4">Created: {task.created_on}</h5>
          <h5 className="my-4">Deadline: {task.due_date || "Not Specified"}</h5>
          <h5 className="my-4">
            Assigned: {task.assigned_name || "Not Assigned"}
          </h5>
          <div className=" mt-16 mb-0 ml-auto max-w-max min-w-max border border-black flex justify-between">
            <button
              onClick={() => setEditState((state) => !state)}
              className="px-3 py-2 border border-black"
            >
              Edit
            </button>
            <button className="px-3 py-2 border border-black">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
