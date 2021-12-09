import styles from "./index.module.scss";
import { TodoListItemProps } from "../../interfaces/interfaces";
import { Buttons } from "./Buttons";

const TodoListItem = ({ label, id }: TodoListItemProps) => {
  return (
    <div className={styles.list__item}>
      <span>{label}</span>
      <Buttons id={id} />
    </div>
  );
};

export default TodoListItem;
