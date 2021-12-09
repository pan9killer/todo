import { useDispatch } from "react-redux";
import { removeSelectedItem } from "../../store/actions";
import styles from "./index.module.scss";

export const Buttons = ({ id }: any) => {
  const dispatch = useDispatch();
  const removeItem = (index: number) => {
    dispatch(removeSelectedItem(index));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        // onClick={onToggleImportant}
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
