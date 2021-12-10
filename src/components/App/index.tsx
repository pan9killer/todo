import styles from "./index.module.scss";
import AddItemForm from "../AddItemForm";
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";

const App = () => {
  return (
    <div className={styles.block}>
      <AppHeader />

      <TodoList />
      <AddItemForm />
    </div>
  );
};

export default App;
