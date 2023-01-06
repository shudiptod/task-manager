import axios from "axios";
import FormData from "form-data";
import { AuthToken } from "../Utils/constants";

export const listTasks = async () => {
  const config = {
    method: "get",
    url: "https://devza.com/tests/tasks/list",
    headers: {
      AuthToken: AuthToken,
    },
  };
  return axios(config)
    .then(function (response) {
      console.log("🚀 ~ file: api.js:15 ~ response", response);
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

export const createTask = async (formData, headers) => {
  const config = {
    method: "post",
    url: "https://devza.com/tests/tasks/create",
    headers: {
      AuthToken: AuthToken,
    },
    data: formData,
  };
  return axios(config)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

export const listUsers = async () => {
  const config = {
    method: "get",
    url: "https://devza.com/tests/tasks/listusers",
    headers: {
      AuthToken: AuthToken,
    },
  };
  return axios(config)
    .then(function (response) {
      console.log("🚀 ~ file: api.js:15 ~ response", response);
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

export const updateTask = async () => {
  const data = new FormData();
  data.append("message", "Do xxx something dasasa");
  data.append("due_date", "2020-09-19 12:12:12");
  data.append("priority", "2");
  data.append("assigned_to", "1");
  data.append("taskid", "1");
  const config = {
    method: "post",
    url: "https://devza.com/tests/tasks/update",
    headers: {
      AuthToken: AuthToken,
      ...data.getHeaders(),
    },
    data: data,
  };
  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

export const deleteTask = () => {
  const data = new FormData();
  data.append("taskid", "1");
  const config = {
    method: "post",
    url: "https://devza.com/tests/tasks/delete",
    headers: {
      AuthToken: AuthToken,
      ...data.getHeaders(),
    },
    data: data,
  };
  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};
