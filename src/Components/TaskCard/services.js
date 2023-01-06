import { deleteTask, updateTask } from "../../Modules/api";

export const updateForm = async (event, taskid, setEditState, setReload) => {
  event.preventDefault();
  try {
    const formData = new FormData();
    formData.append("message", event.target.message.value);
    formData.append("due_date", event.target.due_date.value?.replace("T", " "));
    formData.append("priority", event.target.priority.value);
    formData.append("assigned_to", event.target.assigned_to.value);
    formData.append("taskid", taskid);
    await updateTask(formData);
    setEditState(false);
    setReload((state) => !state);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTaskService = async (taskid, setReload) => {
  try {
    await deleteTask(taskid);
    window.alert("Task Deleted");
    setReload((state) => !state);
  } catch (err) {
    console.log(err);
  }
};
