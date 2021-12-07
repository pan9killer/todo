import TodoListItem from "../TodoListItem";
import store from "../../store/store";
import styles from "./index.module.scss";

const TodoList = () => {
  const state = store.getState();
  console.log(state);

  const elements = state.todoData.map((item, id) => {
    return (
      <li key={id} className={styles.list__group__item}>
        <TodoListItem label={item} />
      </li>
    );
  });
  console.log(elements);

  return <ul className={styles.list__group}>{elements}</ul>;
};

export default TodoList;
