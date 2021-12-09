import { useDispatch } from "react-redux";
import { removeSelectedItem, toggleImportant } from "../../store/actions";
import { IButtonProps } from "../../interfaces/interfaces";
import styles from "./index.module.scss";

export const Buttons = ({ id }: IButtonProps) => {
  const dispatch = useDispatch();

  const removeItem = (index: number) => {
    dispatch(removeSelectedItem(index));
  };

  const toggleImportantItem = (index: number) => {
    dispatch(toggleImportant(index));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={() => toggleImportantItem(id)}
      >
        <i className={styles.exclamation__icon} />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={() => removeItem(id)}
      >
        <i className={styles.trash__icon} />
      </button>
    </>
  );
};
