import { useEffect, useState } from "react";
import { listUsers } from "../../Modules/api";
import { formSubmit } from "./services";

const CreateTask = () => {
  const [users, setUsers] = useState([]);
  console.log("🚀 ~ file: CreateTask.js:7 ~ CreateTask ~ users", users);
  useEffect(() => {
    const getData = async () => {
      const data = await listUsers();
      setUsers(data.users);
    };
    getData();
  }, []);
  return (
    <div className="w-4/12 mx-auto border border-sky-600 p-4">
      <form className="w-full flex flex-col items-center" onSubmit={formSubmit}>
        <label htmlFor="message" className="self-start">
          Message
        </label>
        <input
          required
          id="message"
          type="text"
          name="message"
          className="w-full p-3 border-b-2 border-sky-600 outline-none my-2"
        />
        <label htmlFor="assigned_to" className="self-start">
          Assigned To
        </label>
        <select
          defaultValue=""
          id="assigned_to"
          name="assigned_to"
          className="w-full p-3 border-b-2 border-sky-600 outline-none my-2 text-black"
        >
          <option value={null}>-- Assign --</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="due_date" className="mt-4 self-start">
          Due Date
        </label>
        <input
          type="datetime-local"
          step="1"
          id="due_date"
          name="due_date"
          className="w-full p-3 my-4 border-b-2 border-sky-600 outline-none"
        />
        <label htmlFor="priority" className="self-start">
          Priority
        </label>
        <div className="w-9/12 flex justify-around my-2 self-start">
          <input
            type="radio"
            name="priority"
            className="p-3 border border-gray-400 cursor-pointer"
            value="1"
            id="1"
          />
          <label htmlFor="1">1</label>
          <input
            type="radio"
            name="priority"
            className="p-3 border border-gray-400 cursor-pointer"
            value="2"
            id="2"
          />
          <label htmlFor="2">2</label>
          <input
            type="radio"
            name="priority"
            className="p-3 border border-gray-400 cursor-pointer"
            value="3"
            id="3"
          />
          <label htmlFor="3">3</label>
        </div>

        <input
          type="submit"
          className="w-max mt-4 px-3 py-2  self-end text-white hover:text-sky-600 bg-sky-600 border-2 hover:border-sky-600 hover:bg-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreateTask;
