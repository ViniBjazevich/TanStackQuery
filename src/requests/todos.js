import axios from "axios";

export function getTodos(params) {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
}
