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

  const filteredState = state
    .filter((item) =>
      item.label.toLowerCase().includes(searchState.toLowerCase())
    )
    .filter((item) => {
      if (statusState === "done") {
        return item.done;
      }
      if (statusState === "active") {
        return !item.done;
      }
      return item;
    });

  return (
    <>
      <div className={styles.searchbox}>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ul className={styles.list__group}>
        {filteredState.map((item) => {
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
