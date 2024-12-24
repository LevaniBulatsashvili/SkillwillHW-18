import styles from "./styles/TodosForm.module.scss";
import { useState } from "react";

function TodoForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(name, isCompleted);
  };

  return (
    <form className={styles["todos-form"]} onSubmit={onSubmit}>
      <h1>New Todo</h1>

      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setIsCompleted(e.target.checked)}
          type="checkbox"
        />
      </div>

      <button type="submit">Create</button>
    </form>
  );
}

export default TodoForm;
