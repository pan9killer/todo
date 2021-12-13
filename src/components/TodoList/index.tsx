import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem";
import styles from "./index.module.scss";
import { RootState } from "../../store/store";
import { IState } from "../../interfaces/interfaces";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../searchPanel";

const TodoList = () => {
  const state = useSelector<RootState, IState[]>((state) => state.reducer);
  const statusState = useSelector<RootState, string>(
    (state) => state.statusReducer
  );
  const searchState = useSelector<RootState, string>(
    (state) => state.searchReducer
  );

  return (
    <>
      <div className={styles.searchbox}>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ul className={styles.list__group}>
        {state
          .filter((item) =>
            item.label.toLowerCase().includes(searchState.toLowerCase())
          )
          .filter((item) =>
            statusState === "all"
              ? item
              : statusState === "active"
              ? !item.done
              : item.done
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
          })}
      </ul>
    </>
  );
};

export default TodoList;
