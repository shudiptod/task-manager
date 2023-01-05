import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div
      className="my-4 mx-auto p-5 w-max border cursor-grab focus:cursor-grabbing border-black"
      draggable
    >
      <h3>{task.message}</h3>
      <h5>{task.priority}</h5>
      <h5>{task.created_on}</h5>
      <h5>{task.due_date || "Not Specified"}</h5>
      <h5>{task.assigned_name}</h5>
    </div>
  );
};

export default TaskCard;
