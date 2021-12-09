import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem";
import styles from "./index.module.scss";
import { IStates } from "../../interfaces/interfaces";

const TodoList = () => {
  const state = useSelector((state: IStates) => state);
  let itemStyle = styles.list__group__item;

  return (
    <ul className={styles.list__group}>
      {state.map((item) => {
        item.important
          ? (itemStyle = styles.list__group__item_important)
          : (itemStyle = styles.list__group__item);
        return (
          <li key={item.id} className={itemStyle}>
            <TodoListItem label={item.label} id={item.id} done={item.done} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
