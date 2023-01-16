import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getTodos } from "../requests/todos";

export const TodoList = () => {
  const {
    status,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div className="todoList">
      <h1 className="todoTitle">Todos:</h1>
      <ul>
        {status === "success" &&
          posts.data.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};
