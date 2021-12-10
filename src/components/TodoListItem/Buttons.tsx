import { useDispatch } from "react-redux";
import { removeSelectedItem, toggleImportant } from "../../store/actions";
import { IState } from "../../interfaces/interfaces";
import styles from "./index.module.scss";

interface TodoListItemI {
  item: IState;
}

export const Buttons = ({ item }: TodoListItemI) => {
  const dispatch = useDispatch();

  const removeItem = (index: IState) => {
    dispatch(removeSelectedItem(index));
  };

  const toggleImportantItem = (index: IState) => {
    dispatch(toggleImportant(index));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={() => toggleImportantItem(item)}
      >
        <i className={styles.exclamation__icon} />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={() => removeItem(item)}
      >
        <i className={styles.trash__icon}>
          <img src="./trash" alt="trash" />
        </i>
      </button>
    </>
  );
};
