import styles from "./styles/Todos.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import TodoCard from "./TodoCard";
import { getTodos, postTodos } from "../http/todo";
import TodoForm from "./TodoForm";

const API_KEY = "m8Xha99CLgeMGOcfY8dCPu8h80ps_YR1hoQkbS9uavnipbIKIg";

function Todos() {
  const [todos, setTodos] = useState([]);

  const onFormSubmit = async (name, isCompleted) => {
    const newTodo = await postTodos(
      "https://crudapi.co.uk/api/v1/todos",
      API_KEY,
      [{ name, isCompleted }]
    );

    setTodos((prev) => [newTodo, ...prev]);
  };

  useEffect(() => {
    const getNewTodos = async () => {
      const freshTodos = await getTodos(
        "https://crudapi.co.uk/api/v1/todos",
        API_KEY
      );

      setTodos(freshTodos);
    };

    getNewTodos();
  }, []);

  return (
    <div className={styles["todos"]}>
      <TodoForm onFormSubmit={onFormSubmit} />
      <ul>
        {todos.map((todo) => (
          <TodoCard
            key={todo["_uuid"]}
            name={todo.name}
            isCompleted={todo.isCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
