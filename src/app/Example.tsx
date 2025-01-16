"use client";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

type TodoData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = async (): Promise<TodoData[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com//posts");
  const responseData: TodoData[] = await response.json();
  return responseData;
};

const Example = () => {
  // const [todo, setTodo] = useState<TodoData[] | null>(null);

  // const handleTodo = async (): Promise<void> => {
  //   const data = await getTodos();
  //   setTodo(data);
  // };

  // useEffect(() => {
  //   console.log("executou efeito.");
  //   handleTodo();
  // }, []);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: getTodos,
  });

  console.log(data);

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((e, i) => (
          <div key={i}>
            <p>{e.title}</p>
          </div>
        ))}
    </div>
  );
};

export default Example;
