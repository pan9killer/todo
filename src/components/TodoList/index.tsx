import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem";
import styles from "./index.module.scss";
import { IState } from "../../interfaces/interfaces";

const TodoList = () => {
  const state = useSelector((state: IState) => state);

  return (
    <ul className={styles.list__group}>
      {state.todoData.map((item, index) => {
        return (
          <li key={index} className={styles.list__group__item}>
            <TodoListItem label={item} id={index} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
