import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTodos } from "../requests/todos";

export const OtherComponent = () => {
  // because this data was already fetched in <TodoList /> it will retrieve the data from cache
  const { status, data: posts } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return <div>{status === "success" && <div>{posts[0].title}</div>}</div>;
};
