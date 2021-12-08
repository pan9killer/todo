import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import TodoListItem from "../TodoListItem";
import store from "../../store/store";
import styles from "./index.module.scss";

const TodoList = () => {
  const [elements, setElements] = useState([]);
  const state = store.getState();
  useSelector((state) => state);
  // console.log(state);

  useEffect(() => {
    setElements(
      state.todoData.map((item: string, index: number) => {
        return (
          <li key={index} className={styles.list__group__item}>
            <TodoListItem label={item} />
          </li>
        );
      })
    );
  }, [state.todoData]);

  return <ul className={styles.list__group}>{elements}</ul>;
};

export default TodoList;
