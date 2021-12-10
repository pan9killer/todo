import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { toggleDone } from "../../store/actions";
import { IState, TodoListItemI } from "../../interfaces/interfaces";
import { Buttons } from "./Buttons";

const TodoListItem = ({ item }: TodoListItemI) => {
  const dispatch = useDispatch();

  const changeDoneStatus = (index: IState) => {
    dispatch(toggleDone(index));
  };

  return (
    <div className={styles.list__item}>
      <span
        onClick={() => changeDoneStatus(item)}
        className={item.done ? styles.done : styles.standart}
      >
        {item.label}
      </span>
      <Buttons item={item} />
    </div>
  );
};

export default TodoListItem;
