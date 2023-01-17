import axios from "axios";

export const getTodos = async () => {
  // You can send back the data you fetched or the promise
  const response = await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return response.data;
};

export const createTodo = (body) => {
  // Not actually creating a todo, just faking it
  return axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    body,
  });
};
