import styles from "./styles/TodosCard.module.scss";

function TodoCard({ name, isCompleted }) {
  return (
    <div
      className={`${styles["todos-card"]} ${
        styles[isCompleted ? "completed" : "in-progress"]
      }`}
    >
      <h1>{name}</h1>
    </div>
  );
}

export default TodoCard;
