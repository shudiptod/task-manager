import { createTask } from "../../Modules/api";

export const formSubmit = async (event) => {
  event.preventDefault();
  let data = new FormData();
  data.append("message", event.target.message.value);
  data.append("due_date", event.target.due_date.value.replace("T", " "));
  data.append("priority", event.target.priority.value);
  data.append("assigned_to", event.target.assigned_to.value);
  const result = await createTask(data);
  console.log(result);
};
