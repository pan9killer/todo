import styles from "./index.module.scss";
import AddItemForm from "../AddItemForm";
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../searchPanel";

const App = () => {
  return (
    <div className={styles.block}>
      <AppHeader />
      <div className={styles.searchbox}>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList />
      <AddItemForm />
    </div>
  );
};

export default App;
