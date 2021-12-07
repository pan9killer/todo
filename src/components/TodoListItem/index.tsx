import styles from "./index.module.scss";

const TodoListItem = ({ label }: any) => {
  return (
    <div className={styles.list__item}>
      <span>{label}</span>

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
    </div>
  );
};

export default TodoListItem;
