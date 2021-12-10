import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import TodoListItem from "../TodoListItem";
import styles from "./index.module.scss";
import { RootState } from "../../store/store";
import { IState } from "../../interfaces/interfaces";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../searchPanel";

const TodoList = () => {
  const state = useSelector<RootState, IState[]>((state) => state.reducer);
  const searchState = useSelector<RootState, string>(
    (state) => state.searchReducer
  );
  const [value, setValue] = useState([<></>]);

  const showAll = () => {
    setValue(
      state
        .filter((item) =>
          item.label.toLowerCase().includes(searchState.toLowerCase())
        )
        .map((item) => {
          return (
            <li
              key={item.id}
              className={
                item.important
                  ? styles.list__group__item_important
                  : styles.list__group__item
              }
            >
              <TodoListItem item={item} />
            </li>
          );
        })
    );
  };

  useEffect(() => {
    showAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const showDone = () => {
    setValue(
      state
        .filter((item) =>
          item.label.toLowerCase().includes(searchState.toLowerCase())
        )
        .filter((item) => item.done)
        .map((item) => {
          return (
            <li
              key={item.id}
              className={
                item.important
                  ? styles.list__group__item_important
                  : styles.list__group__item
              }
            >
              <TodoListItem item={item} />
            </li>
          );
        })
    );
  };

  const showActive = () => {
    setValue(
      state
        .filter((item) =>
          item.label.toLowerCase().includes(searchState.toLowerCase())
        )
        .filter((item) => !item.done)
        .map((item) => {
          return (
            <li
              key={item.id}
              className={
                item.important
                  ? styles.list__group__item_important
                  : styles.list__group__item
              }
            >
              <TodoListItem item={item} />
            </li>
          );
        })
    );
  };

  return (
    <>
      <div className={styles.searchbox}>
        <SearchPanel />
        <ItemStatusFilter all={showAll} done={showDone} active={showActive} />
      </div>
      <ul className={styles.list__group}>{value}</ul>
    </>
  );
};

export default TodoList;
