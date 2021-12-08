import styles from "./index.module.scss";

const AddItemForm = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.input__form}
        placeholder="Новая задача..."
      />
      <button className="btn btn-outline-secondary">Добавить</button>
    </form>
  );
};

export default AddItemForm;
