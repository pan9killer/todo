// import styles from "./index.module.scss";
import AddItemForm from "../AddItemForm";
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";

function App() {
  return (
    <div className="App">
      <h1>React-Redux ToDo app</h1>
      <AppHeader />
      <TodoList />
      <AddItemForm />
    </div>
  );
}

export default App;
