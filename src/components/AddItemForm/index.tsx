import { useSelector, useDispatch } from "react-redux";
import { useState, FormEvent } from "react";
import { addNewItem } from "../../store/actions";
import styles from "./index.module.scss";

const AddItemForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  useSelector((state) => state);

  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addNewItem(value));
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={addNewTodo}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className={styles.input__form}
        placeholder="Новая задача..."
      />
      <button className="btn btn-outline-secondary">Добавить</button>
    </form>
  );
};

export default AddItemForm;
