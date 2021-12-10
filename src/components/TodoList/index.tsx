import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem";
import styles from "./index.module.scss";
import { IState } from "../../interfaces/interfaces";

const TodoList = () => {
  const state = useSelector((state: IState[]) => state);

  return (
    <ul className={styles.list__group}>
      {state.map((item) => {
        return (
          <li
            key={item.id}
            className={
              item.important
                ? styles.list__group__item_important
                : styles.list__group__item
            }
          >
            <TodoListItem label={item.label} id={item.id} done={item.done} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
