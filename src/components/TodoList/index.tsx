import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem";
import styles from "./index.module.scss";
import { IState } from "../../interfaces/interfaces";

const TodoList = () => {
  const state = useSelector((state: IState) => state);

  return (
    <ul className={styles.list__group}>
      {state.todoData.map((item: string, index: number) => {
        return (
          <li key={index + 1} className={styles.list__group__item}>
            <TodoListItem label={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
