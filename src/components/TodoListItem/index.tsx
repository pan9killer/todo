import styles from "./index.module.scss";
import { TodoListItemProps } from "../../interfaces/interfaces";
import { Buttons } from "./Buttons";

const TodoListItem = ({ label }: TodoListItemProps) => {
  return (
    <div className={styles.list__item}>
      <span>{label}</span>
      <Buttons />
    </div>
  );
};

export default TodoListItem;
