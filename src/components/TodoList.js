import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../requests/todos";
import { OtherComponent } from "./OtherComponent";

export const TodoList = () => {
  const [displayComponent, setDisplayComponent] = useState(false);
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
          posts
            .filter((post) => post.id < 15)
            .map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
      <button onClick={() => setDisplayComponent((prev) => !prev)}>
        {displayComponent ? "Hide Component" : "Display Component"}
      </button>
      {displayComponent && <OtherComponent />}
    </div>
  );
};
