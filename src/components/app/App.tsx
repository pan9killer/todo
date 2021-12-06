import styles from './App.module.scss';
import AddItemForm from '../addItemForm';
import AppHeader from '../appHeader';
import TodoList from '../todoList';

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
