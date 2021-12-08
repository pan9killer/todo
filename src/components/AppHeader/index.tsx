import styles from "./index.module.scss";

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <h1>React-Redux ToDo app</h1>
      <h2>3 не сделано, 0 сделано</h2>
    </div>
  );
};

export default AppHeader;
