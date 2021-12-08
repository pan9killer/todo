import styles from "./index.module.scss";
export const Buttons = () => {
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
        // onClick={onDeleted}
      >
        <i className={styles.trash__icon} />
      </button>
    </>
  );
};
