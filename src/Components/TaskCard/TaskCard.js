import React, { useState } from "react";

const TaskCard = ({ task }) => {
  const [editState, setEditState] = useState(false);
  return (
    <div
      className="my-4 mx-auto p-5 w-full border  border-black"
      draggable={!editState}
    >
      {editState ? (
        <>
          <input
            type="text"
            defaultValue={task.message}
            className="w-full border-b-2 border-sky-600 outline-none my-2"
          />
          <input
            type="text"
            defaultValue={task.priority}
            className="w-full border-b-2 border-sky-600 outline-none my-2"
          />
          <h5>{task.created_on}</h5>
          <input
            type="datetime-local"
            defaultValue={task.due_date.replace(" ", "T")}
            className="w-full border-b-2 border-sky-600 outline-none my-2"
          />

          <h5>{task.assigned_name || "Not Assigned"}</h5>
          <div className="my-2 ml-auto w-6/12 max-w-max min-w-max border border-black flex justify-between">
            <button
              onClick={() => setEditState((state) => !state)}
              className="px-3 py-2 border border-black"
            >
              cancel
            </button>
            <button className="px-3 py-2 border border-black">submit</button>
          </div>
        </>
      ) : (
        <>
          <h3 className="my-3">{task.message}</h3>
          <h5 className="my-3">{task.priority}</h5>
          <h5 className="my-3">{task.created_on}</h5>
          <h5 className="my-3">{task.due_date || "Deadline Not Specified"}</h5>
          <h5 className="my-3">{task.assigned_name || "Not Assigned"}</h5>
          <div className="my-2 ml-auto max-w-max min-w-max border border-black flex justify-between">
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
