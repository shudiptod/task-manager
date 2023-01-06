import React from "react";
import { updateForm } from "./services";

const UpdateCard = ({ setEditState, users, task, setReload }) => {
  return (
    <form
      onSubmit={(event) => updateForm(event, task.id, setEditState, setReload)}
    >
      <input
        required
        name="message"
        type="text"
        defaultValue={task.message}
        className="w-full border-b-2 border-sky-600 outline-none my-2 mb-3"
      />
      <label htmlFor="priority" className="mt-4">
        Priority
      </label>
      <div className="w-6/12 mx-auto flex justify-around mt-2 mb-3 ">
        <div className="w-2/12 flex justify-between items-center">
          <input
            defaultChecked={task.priority === "1"}
            type="radio"
            name="priority"
            className="p-3 border border-gray-400 cursor-pointer"
            value="1"
            id="1"
          />
          <label htmlFor="1">1</label>
        </div>
        <div className="w-2/12 flex justify-between items-center">
          <input
            defaultChecked={task.priority === "2"}
            type="radio"
            name="priority"
            className="p-3 border border-gray-400 cursor-pointer"
            value="2"
            id="2"
          />
          <label htmlFor="2">2</label>
        </div>
        <div className="w-2/12 flex justify-between items-center">
          <input
            defaultChecked={task.priority === "3"}
            type="radio"
            name="priority"
            className="p-3 border border-gray-400 cursor-pointer"
            value="3"
            id="3"
          />
          <label htmlFor="3">3</label>
        </div>
      </div>
      <h5>Created: {task.created_on}</h5>
      <input
        name="due_date"
        type="datetime-local"
        defaultValue={task.due_date?.replace(" ", "T")}
        className="w-full border-b-2 border-sky-600 outline-none my-2"
      />

      <select
        id="assigned_to"
        name="assigned_to"
        className="w-full py-3 border-b-2 border-sky-600 outline-none my-2 text-black"
      >
        <option value={task.assigned_to || null}>{task.assigned_name}</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <div className="my-2 ml-auto w-6/12 max-w-max min-w-max border border-black flex justify-between">
        <button
          onClick={() => setEditState((state) => !state)}
          className="px-3 py-2 border border-black"
        >
          cancel
        </button>
        <input
          type="submit"
          className="px-3 py-2 border border-black cursor-pointer"
        />
      </div>
    </form>
  );
};

export default UpdateCard;
