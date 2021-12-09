import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import TodoListItem from "../TodoListItem";
import styles from "./index.module.scss";
import { IState } from "../../interfaces/interfaces";

const TodoList = () => {
  const [elements, setElements] = useState([<></>]);
  const state = useSelector((state: IState) => state);

  useEffect(() => {
    const element = state.todoData.map((item: string, index: number) => {
      const newI = Math.floor(Math.random() * 100);
      console.log(newI);
      return (
        <li key={newI} className={styles.list__group__item}>
          <TodoListItem label={item} />
        </li>
      );
    });
    setElements(element);
  }, [state.todoData]);

  return <ul className={styles.list__group}>{elements}</ul>;
};

export default TodoList;
