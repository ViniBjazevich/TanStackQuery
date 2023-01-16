import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { createTodo } from "../requests/todos";

export const CreateTodoForm = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const { status, error, mutate } = useMutation({
    mutationFn: createTodo,
    onError: () => {
      // Do error handling here
      console.log("Error");
    },
    onSuccess: () => {
      // Success logic goes here

      console.log("Created todo!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({
      userId: 1,
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  return (
    <>
      <form className="addTodoForm" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <button className="addTodoButton" type="submit">
          Create
        </button>
      </form>
      {status === "success" && (
        <div className="createTodoMessage">Successfully created todo!</div>
      )}
      {status === "error" && (
        <div className="createTodoMessage">{JSON.stringify(error)}</div>
      )}
    </>
  );
};
