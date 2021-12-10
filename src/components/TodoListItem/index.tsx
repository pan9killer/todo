import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { toggleDone } from "../../store/actions";
import { TodoListItemProps } from "../../interfaces/interfaces";
import { Buttons } from "./Buttons";

const TodoListItem = ({ label, id, done }: TodoListItemProps) => {
  const dispatch = useDispatch();

  const changeDoneStatus = (index: number) => {
    dispatch(toggleDone(index));
  };

  return (
    <div className={styles.list__item}>
      <span
        onClick={() => changeDoneStatus(id)}
        className={done ? styles.done : styles.standart}
      >
        {label}
      </span>
      <Buttons id={id} />
    </div>
  );
};

export default TodoListItem;
