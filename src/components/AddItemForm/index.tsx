import { useDispatch } from "react-redux";
import { useState, FormEvent } from "react";
import { addNewItem } from "../../store/actions";
import { createTodoItem } from "../../utils/createItem";
import styles from "./index.module.scss";

const AddItemForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addNewItem(createTodoItem(value)));
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
