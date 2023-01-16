import axios from "axios";

export function getTodos() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
}

export function createTodo(body) {
  // Not actually creating a todo, just faking it
  return axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    body,
  });
}
